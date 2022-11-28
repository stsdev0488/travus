import React, { useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import fileExtension from 'file-extension';
import uuid from 'uuid-random';
import { decode } from 'base64-arraybuffer';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import {
  createPost,
  createUserReaction,
  deleteUserReaction,
} from '../../graphql/mutations';
import { getBusiness } from '../../graphql/queries';
import PostItemContainer from 'containers/PostItemContainer';
import SafeAreaContainer from 'components/SafeAreaContainer';
import BusinessHeader from 'components/Headers/BusinessHeader';
import Filter from 'components/Filter';
import Reaction from 'components/Reaction';
import TagList from 'components/PostItem/TagList';
import { Colors, imagePickerOptions, Images } from 'config';
import { scaleH, scaleW } from 'utils/scale';
import { compareTime } from 'utils/timediff';
import { getReactions } from 'utils/reaction';
import Spinner from 'react-native-loading-spinner-overlay';
import DismissKeyboard from 'components/DismissKeyboard';
import InputBar from 'components/InputBar';
import { getMentions } from 'utils/mention';

const styles = StyleSheet.create({
  saveButton: {
    width: scaleH(30),
    height: scaleH(30),
    borderRadius: scaleH(10),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleH(30),
  },
  saveImage: {
    width: scaleH(12.5),
    height: scaleH(12.5),
  },
  container: {
    paddingHorizontal: scaleW(18),
  },
  reactionContainer: {
    marginTop: scaleH(15),
    marginBottom: scaleH(10),
    alignItems: 'center',
  },
  tagContainer: {
    marginTop: scaleH(11),
  },
  filterContainer: {
    paddingVertical: scaleH(15),
    backgroundColor: Colors.black,
  },
});

const HeaderRight = () => (
  <TouchableOpacity style={styles.saveButton}>
    <Image source={Images.saveIcon} style={styles.saveImage} />
  </TouchableOpacity>
);

const Business = ({ navigation, route }) => {
  const { businessId, cityId } = route.params;
  const user = useSelector((state) => state.profile.profile);
  const [business, setBusiness] = useState({});
  const [businesses, setBusinesses] = useState([]);
  const [attachedMedias, setAttachedMedias] = useState([]);
  const [message, setMessage] = useState(null);
  const [clearInput, setClearInput] = useState(false);
  const [showMentions, setShowMentions] = useState(true);
  const [selectedFilterOption, setSelectedFilterOption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFilterItemPress = (item) => {
    setSelectedFilterOption(item);
  };

  const handleUserReaction = async (type) => {
    try {
      const existingReaction = business.reactions?.items.find(
        (item) =>
          item.user.id === user.id &&
          item.reactionType === type.toUpperCase() &&
          item.reactionTarget === 'BUSINESS',
      );
      if (existingReaction) {
        await API.graphql(
          graphqlOperation(deleteUserReaction, {
            input: {
              id: existingReaction.id,
            },
          }),
        );
      } else {
        await API.graphql(
          graphqlOperation(createUserReaction, {
            input: {
              userReactionUserId: user.id,
              userReactionBusinessId: business.id,
              reactionType: type.toUpperCase(),
              reactionTarget: 'BUSINESS',
            },
          }),
        );
      }
      fetchBusiness();
    } catch (e) {
      console.log(e);
    }
  };

  const handleUploadImage = async () => {
    // await request(PERMISSIONS.IOS.CAMERA);
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        ...imagePickerOptions,
      });
      if (!result.cancelled) {
        const extension = fileExtension(result.uri);
        const source = {
          uri: `data:${result.type}/${extension};base64,${result.base64}`,
          data: result.base64,
          type: `${result.type}/${extension}`,
          extension,
        };
        setAttachedMedias([...attachedMedias, source]);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const deleteAttachedMedia = (item) => {
    const deletedMedias = attachedMedias.filter(
      (media) => media.uri !== item.uri,
    );
    setAttachedMedias(deletedMedias);
  };

  const onChangeHandler = (message) => {
    setMessage(message.text);
    setClearInput(false);
  };

  const onHideMentions = () => {
    setShowMentions(false);
  };

  const handlePost = async () => {
    setLoading(true);
    try {
      const postId = uuid();
      const imageUrls = [];
      if (attachedMedias.length) {
        let mediaId = 0;
        for (const media of attachedMedias) {
          const uploadResponse = await Storage.put(
            `images/${postId}-${mediaId}.${media.extension}`,
            decode(media.data),
            {
              contentType: media.type,
            },
          );
          const imageUrl = await Storage.get(uploadResponse.key, {
            level: 'public',
          });
          const urls = imageUrl.split('?');
          imageUrls.push(urls[0]);
          mediaId += 1;
        }
      }

      let mentionIDs = getMentions(message);

      await API.graphql(
        graphqlOperation(createPost, {
          input: mentionIDs.length
            ? {
                id: postId,
                postUserId: user.id,
                postCityId: cityId,
                message,
                medias: imageUrls,
                postBusinessId: mentionIDs[0],
              }
            : {
                id: postId,
                postUserId: user.id,
                postCityId: cityId,
                message,
                medias: imageUrls,
                postBusinessId: business.id,
              },
        }),
      );
      await fetchBusiness();
    } catch (e) {
      console.log(e);
    }

    setMessage('');
    setAttachedMedias([]);
    setLoading(false);
  };

  const fetchBusiness = async () => {
    setLoading(true);
    try {
      const businessData = await API.graphql(
        graphqlOperation(getBusiness, { id: businessId }),
      );
      setBusiness(businessData.data.getBusiness);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const reactions = useMemo(() => {
    return getReactions(
      business.reactions?.items.filter(
        (item) => item.reactionTarget === 'BUSINESS',
      ) || [],
      business.comments?.items || [],
    );
  }, [business]);

  useEffect(() => {
    fetchBusiness();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaContainer>
      <Spinner visible={loading} />
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <BusinessHeader
            navigation={navigation}
            title={business.name || ''}
            location={business.address || ''}
            reaction={
              <Reaction
                data={reactions}
                userReaction={handleUserReaction}
                business
              />
            }
            right={<HeaderRight />}
          />
          <KeyboardAvoidingScrollView
            contentContainerStyle={styles.container}
            stickyHeaderIndices={[1]}
            style={{ flex: 1 }}
            stickyFooter={
              <InputBar
                businesses={businesses}
                clearInput={clearInput}
                onChangeHandler={onChangeHandler}
                showMentions={showMentions}
                onHideMentions={onHideMentions}
                handlePost={handlePost}
                attachedMedias={attachedMedias}
                deleteAttachedMedia={deleteAttachedMedia}
                handleUploadImage={handleUploadImage}
                setShowMentions={setShowMentions}
              />
            }
          >
            <View>
              <FlatList
                horizontal
                data={business.posts?.items}
                renderItem={({ item, index }) => (
                  <PostItemContainer businessBanner key={item.id} data={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            {/*<View style={styles.tagContainer}>*/}
            {/*  <TagList tagList={['friedchicken', 'blackowned', 'LA']} />*/}
            {/*</View>*/}
            <View style={styles.filterContainer}>
              <Filter
                options={['Highest Rating', 'Most Flags', 'Recent']}
                selectedOption={selectedFilterOption}
                onItemPress={handleFilterItemPress}
              />
            </View>
            {business.posts?.items
              .sort(compareTime)
              // .filter((item) => item.message.includes(search))
              .map((item) => (
                <PostItemContainer
                  key={item.id}
                  data={item}
                  navigation={navigation}
                />
              ))}
          </KeyboardAvoidingScrollView>
        </View>
      </DismissKeyboard>
    </SafeAreaContainer>
  );
};

export default Business;
