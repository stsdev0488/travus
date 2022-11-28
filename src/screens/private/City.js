import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import { PERMISSIONS, request } from 'react-native-permissions';
import * as ImagePicker from 'expo-image-picker';
import DelayInput from 'react-native-debounce-input';
import Spinner from 'react-native-loading-spinner-overlay';
import { EU } from 'react-native-mention-editor';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { createPost } from '../../graphql/mutations';
import { getCity, listBusinesss } from '../../graphql/queries';
import uuid from 'uuid-random';
import { decode } from 'base64-arraybuffer';
import fileExtension from 'file-extension';
import Filter from 'components/Filter';
import SafeAreaContainer from 'components/SafeAreaContainer';
import Header from 'components/Headers/Header';
import PostBannerList from 'components/PostBanner/PostBannerList';
import DismissKeyboard from 'components/DismissKeyboard';
import InputBar from 'components/InputBar';
import PostItemContainer from 'containers/PostItemContainer';
import { Colors, imagePickerOptions } from 'config';
import { scaleH, scaleW } from 'utils/scale';
import { compareTime } from 'utils/timediff';
import { getMentions } from 'utils/mention';

const City = ({ navigation, route }) => {
  const { location } = route.params;
  const user = useSelector((state) => state.profile.profile);
  const [city, setCity] = useState({});
  const [businesses, setBusinesses] = useState([]);
  const [search, setSearch] = useState('');
  const [attachedMedias, setAttachedMedias] = useState([]);
  const [selectedFilterOption, setSelectedFilterOption] = useState('');
  const [message, setMessage] = useState('');
  const [clearInput, setClearInput] = useState(false);
  const [showMentions, setShowMentions] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleFilterItemPress = (item) => {
    setSelectedFilterOption(item);
  };

  const handleExpand = () => {
    navigation.navigate('CityThread', {
      location,
    });
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
      let mentionIDs = [];
      const retLines = message.split('\n');
      retLines.forEach((retLine, rowIndex) => {
        const mentions = EU.findMentions(retLine);
        mentions.forEach(async (mention) => {
          const id = mention.undefined;
          mentionIDs.push(id);
        });
      });
      await API.graphql(
        graphqlOperation(createPost, {
          input: mentionIDs.length
            ? {
                id: postId,
                postUserId: user.id,
                postCityId: location.id,
                message,
                medias: imageUrls,
                postBusinessId: mentionIDs[0],
              }
            : {
                id: postId,
                postUserId: user.id,
                postCityId: location.id,
                message,
                medias: imageUrls,
              },
        }),
      );
      await fetchCity();
    } catch (e) {
      console.log(e);
    }

    setMessage('');
    setAttachedMedias([]);
    setLoading(false);
  };

  const fetchCity = async () => {
    setLoading(true);
    const cityData = await API.graphql(
      graphqlOperation(getCity, { id: location.id }),
    );
    setCity({ ...cityData.data.getCity });
    const businessData = await API.graphql(
      graphqlOperation(listBusinesss, {
        filter: {
          verifiedStatus: { eq: true },
          address: { contains: cityData.data.getCity.name },
        },
      }),
    );
    setBusinesses(businessData.data.listBusinesss.items);
    setLoading(false);
  };

  useEffect(() => {
    fetchCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaContainer>
      <Spinner visible={loading} />
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <Header title={location.name} navigation={navigation} />
          <KeyboardAvoidingScrollView
            contentContainerStyle={styles.container}
            style={{ flex: 1 }}
            stickyHeaderIndices={[1]}
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
            <PostBannerList posts={city.posts?.items} onPress={handleExpand} />
            <View
              style={{
                backgroundColor: Colors.black,
                paddingBottom: scaleH(11),
              }}
            >
              <DelayInput
                value={search}
                minLength={1}
                autoCapitalize="none"
                onChangeText={setSearch}
                placeholder="Search"
                placeholderTextColor={Colors.reactionLabel}
                delayTimeout={500}
                style={styles.searchInput}
              />
              {/*<View style={{ marginVertical: scaleH(11) }}>*/}
              {/*  <Filter*/}
              {/*    options={filterOptions}*/}
              {/*    selectedOption={selectedFilterOption}*/}
              {/*    onItemPress={handleFilterItemPress}*/}
              {/*  />*/}
              {/*</View>*/}
            </View>
            {city?.posts?.items
              .sort(compareTime)
              .filter((item) => {
                if (!getMentions(item.message).length && item.business) {
                  return null;
                } else {
                  return item;
                }
              })
              .filter((item) => item.message.includes(search))
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleW(18),
    paddingTop: scaleH(10),
  },
  searchInput: {
    height: scaleH(46),
    backgroundColor: '#DFDEDE19',
    fontSize: scaleH(16),
    color: Colors.reactionLabel,
    letterSpacing: -0.02,
    marginTop: scaleH(10),
    paddingHorizontal: scaleW(16),
  },
});

export default City;
