import React, { useEffect, useMemo, useState } from 'react';
import { Alert, View } from 'react-native';
import { useSelector } from 'react-redux';
import ImageView from 'react-native-image-viewing';
import { API, graphqlOperation } from 'aws-amplify';
import { createUserReaction, deleteUserReaction } from '../graphql/mutations';
import { getPost } from '../graphql/queries';
import PostItem from 'components/PostItem';
import PostBannerItem from 'components/PostBanner/PostBannerItem';
import PostBannerThreadItem from 'components/PostBanner/PostBannerThreadItem';
import ProfilePostItem from 'components/PostItem/ProfilePostItem';
import { getReactions } from 'utils/reaction';

const PostItemContainer = ({
  banner,
  businessBanner,
  thread,
  profile,
  data,
  navigation,
}) => {
  const user = useSelector((state) => state.profile.profile);
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [imageViewVisible, setImageViewVisible] = useState(false);
  const [imageViewSource, setImageViewSource] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const fetchPost = async () => {
    const postData = await API.graphql(
      graphqlOperation(getPost, { id: data.id }),
    );
    setPost(postData.data.getPost);
  };

  const handleCommentImagePress = (medias, index) => {
    setImageViewSource(medias.map((media) => ({ uri: media })));
    setImageIndex(index);
    setImageViewVisible(true);
  };

  const handleBusinessPress = (postItem) => {
    navigation.navigate('Business', {
      businessId: postItem.business.id,
      cityId: postItem.city.id,
    });
  };

  const handleUserReaction = async (type) => {
    try {
      const existingItem = post.userReactions.items.find(
        (item) =>
          item.reactionType === type.toUpperCase() && item.user.id === user.id,
      );
      if (existingItem) {
        await API.graphql(
          graphqlOperation(deleteUserReaction, {
            input: {
              id: existingItem.id,
            },
          }),
        );
      } else {
        if (type === 'like') {
          const existingDislikeItem = post.userReactions.items.find(
            (item) =>
              item.reactionType === 'DISLIKE' && item.user.id === user.id,
          );
          if (existingDislikeItem) {
            Alert.alert('Warning', 'Cannot like and dislike for one post!', [
              { text: 'OK' },
            ]);
            return;
          }
        }
        if (type === 'dislike') {
          const existingLikeItem = post.userReactions.items.find(
            (item) => item.reactionType === 'LIKE' && item.user.id === user.id,
          );
          if (existingLikeItem) {
            Alert.alert('Warning', 'Cannot like and dislike for one post!', [
              { text: 'OK' },
            ]);
            return;
          }
        }
        await API.graphql(
          graphqlOperation(createUserReaction, {
            input: {
              userReactionUserId: user.id,
              userReactionPostId: post.id,
              reactionType: type.toUpperCase(),
            },
          }),
        );
      }
      fetchPost();
    } catch (e) {
      console.log('reaction error ', e);
    }
  };

  const reactions = useMemo(() => {
    return getReactions(
      post.userReactions?.items || [],
      post.comments?.items || [],
    );
  }, [post]);

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (banner) {
    if (post.medias?.length && post.userReactions?.items?.length) {
      return (
        <PostBannerItem
          image={post.medias}
          reaction={reactions}
          userReaction={handleUserReaction}
        />
      );
    } else {
      return null;
    }
  } else if (businessBanner) {
    if (post.medias?.length && post.userReactions?.items?.length) {
      return (
        <PostBannerItem
          noReaction
          image={post.medias}
          reaction={reactions}
          userReaction={handleUserReaction}
        />
      );
    } else {
      return null;
    }
  } else if (thread) {
    if (post.medias?.length && post.userReactions?.items?.length) {
      return (
        <PostBannerThreadItem
          medias={post.medias}
          reaction={reactions}
          userReaction={handleUserReaction}
          businessName={post.business?.name}
          onBusinessPress={() => {}}
        />
      );
    } else {
      return null;
    }
  } else if (profile) {
    return <ProfilePostItem data={post} reactions={reactions} />;
  } else {
    return (
      <View>
        <PostItem
          data={post}
          navigation={navigation}
          onPress={() =>
            navigation.navigate('CommentDetail', {
              location: post.city,
              data: post,
            })
          }
          onImagePress={(index) => handleCommentImagePress(post.medias, index)}
          reactions={reactions}
          userReaction={handleUserReaction}
          onBusinessPress={() => handleBusinessPress(post)}
        />
        <ImageView
          images={imageViewSource}
          imageIndex={imageIndex}
          visible={imageViewVisible}
          onRequestClose={() => setImageViewVisible(false)}
        />
      </View>
    );
  }
};

export default PostItemContainer;
