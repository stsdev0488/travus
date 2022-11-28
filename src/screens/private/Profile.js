import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Avatar } from 'react-native-elements';
import { API, graphqlOperation } from 'aws-amplify';
import Spinner from 'react-native-loading-spinner-overlay';
import { getUser, listPosts, listBusinesss } from '../../graphql/queries';
import SafeAreaContainer from 'components/SafeAreaContainer';
import FilterButton from 'components/Filter/FilterButton';
import ProfileTagList from 'components/Profile/ProfileTagList';
import SavedItem from 'components/Profile/SavedItem';
import SwipeDeleteListView from 'components/SwipeDeleteListView';
import PostItemContainer from 'containers/PostItemContainer';
import { Images } from 'config';
import { scaleH, scaleW } from 'utils/scale';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleH(20),
    paddingHorizontal: scaleW(15),
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  headerRight: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  tagListContainer: {
    marginTop: scaleH(25),
    paddingVertical: scaleH(10),
  },
});

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.profile.profile);
  const { profile } = useSelector((state) => state.profile);
  const [selectedTag, setSelectedTag] = useState(0);
  const [allData, setAllData] = useState({});
  const [posts, setPosts] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBusiness = (text) => {
    navigation.navigate('Business', {
      business: text,
    });
  };

  const renderPosts = () => {
    return (
      <FlatList
        data={allData.posts?.items || []}
        renderItem={({ item, index }) => (
          <PostItemContainer profile key={item.id} data={item} />
        )}
      />
    );
  };

  const renderLikes = () => {
    const likes = posts.filter((post) => {
      let liked = false;
      post.userReactions?.items.forEach((item) => {
        if (item.user?.id === user.id && item.reactionType === 'LIKE') {
          liked = true;
        }
      });
      if (liked) {
        return post;
      } else {
        return null;
      }
    });
    return (
      <FlatList
        data={likes || []}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PostItemContainer
            key={item.id}
            data={item}
            navigation={navigation}
          />
        )}
      />
    );
  };

  const renderSaved = () => {
    const businesses = allData.businesses?.items.map((item) => ({
      name: item.name,
      location: item.address,
      posts: item.posts.items,
    }));
    return (
      <SwipeDeleteListView
        key={'1'}
        data={businesses}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={(data) => <SavedItem key={data.index} data={data.item} />}
      />
    );
  };

  const renderFlags = () => {
    const flagBusinesses = businesses
      .filter((item) =>
        item.reactions.items.find(
          (reaction) =>
            reaction.reactionType === 'FLAG' &&
            reaction.reactionTarget === 'BUSINESS' &&
            reaction.user.id === user.id,
        ),
      )
      .map((business) => ({
        name: business.name,
        location: business.address,
        posts: business.posts.items,
      }));

    return (
      <SwipeDeleteListView
        key={'2'}
        data={flagBusinesses || []}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={(data) => <SavedItem key={data.index} data={data.item} />}
      />
    );
  };

  const renderPage = () => {
    switch (selectedTag) {
      case 0:
        return renderPosts();
      case 1:
        return renderLikes();
      case 2:
        return renderSaved();
      case 3:
        return renderFlags();
      default:
        return renderPosts();
    }
  };

  const tags = useMemo(() => {
    const postCount = allData.posts?.items?.length || 0;
    const likeCount =
      allData.userReactions?.items?.filter(
        (reaction) => reaction.reactionType === 'LIKE',
      ).length || 0;
    const savedBusinessCount = allData.businesses?.items?.length || 0;
    const flagBusinesses = businesses.filter((item) =>
      item.reactions.items.find(
        (reaction) =>
          reaction.reactionType === 'FLAG' &&
          reaction.reactionTarget === 'BUSINESS' &&
          reaction.user.id === user.id,
      ),
    );
    const flaggedBusinessCount = flagBusinesses.length;

    return [
      {
        count: postCount,
        type: 'Posts',
      },
      {
        count: likeCount,
        type: 'Likes',
      },
      {
        count: savedBusinessCount,
        type: 'Saved',
      },
      {
        count: flaggedBusinessCount,
        type: 'Flags',
      },
    ];
  }, [allData, user, businesses]);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const userData = await API.graphql(
        graphqlOperation(getUser, { id: user.id }),
      );
      setAllData(userData.data.getUser);
      const postData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postData.data.listPosts.items);
      const businessData = await API.graphql(graphqlOperation(listBusinesss));
      setBusinesses(businessData.data.listBusinesss.items);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaContainer>
      <Spinner visible={loading} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <FilterButton
              key="header-btn-1"
              text="Edit Profile"
              selected={true}
              onPress={() => navigation.navigate('EditProfile', { tags })}
            />
          </View>
          <Avatar
            size="large"
            source={
              profile.image ? { uri: profile.image } : Images.defaultAvatar
            }
            rounded
          />
          <View style={styles.headerRight}>
            <FilterButton
              key="header-btn-2"
              text="Submit Listing"
              selected={true}
              onPress={() => navigation.navigate('SubmitListing')}
            />
          </View>
        </View>
        <View style={styles.tagListContainer}>
          <ProfileTagList
            tags={tags}
            selectedIndex={selectedTag}
            onItemSelect={setSelectedTag}
          />
        </View>
        {renderPage()}
      </View>
    </SafeAreaContainer>
  );
};

export default Profile;
