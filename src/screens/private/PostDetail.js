import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import SafeAreaContainer from 'components/SafeAreaContainer';
import DismissKeyboard from 'components/DismissKeyboard';
import Header from 'components/Headers/Header';
import { Colors, Images } from 'config';
import { createComment } from '../../graphql/mutations';
import { getPost } from '../../graphql/queries';
import CommentItemContainer from 'containers/CommentItemContainer';
import PostItemContainer from 'containers/PostItemContainer';
import { compareTime } from 'utils/timediff';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleW(18),
  },
  commentInput: {
    flex: 1,
    backgroundColor: Colors.black,
    height: scaleH(60),
    fontSize: scaleH(15),
    color: Colors.white,
    paddingHorizontal: scaleW(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightLabel,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
  },
  repliesContainer: {
    paddingLeft: scaleW(50),
    marginTop: scaleH(10),
  },
  actionContainer: {
    paddingLeft: scaleW(55),
    marginTop: scaleH(5),
  },
  showMoreText: {
    fontSize: scaleH(12),
    fontWeight: '600',
    lineHeight: scaleH(15),
    color: Colors.lightLabel,
    marginVertical: scaleH(3),
  },
  inputBar: {
    paddingBottom: scaleH(30),
    backgroundColor: Colors.black,
  },
  actionBar: {
    paddingHorizontal: scaleW(10),
    paddingTop: scaleH(10),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  postButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: scaleW(10),
    paddingVertical: scaleH(3),
    borderRadius: scaleH(5),
  },
  postLabel: {
    fontSize: scaleH(15),
    fontWeight: '600',
    color: Colors.white,
  },
});

const PostDetail = ({ navigation, route }) => {
  const { location, data } = route.params;
  const user = useSelector((state) => state.profile.profile);
  const [post, setPost] = useState({});
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    setLoading(true);
    const postData = await API.graphql(
      graphqlOperation(getPost, { id: data.id }),
    );
    setPost({ ...postData.data.getPost });
    setLoading(false);
  };

  const handleCommentInput = useCallback((text) => {
    setComment(text);
  }, []);

  const handleComment = async () => {
    setLoading(true);
    try {
      await API.graphql(
        graphqlOperation(createComment, {
          input: {
            message: comment,
            commentUserId: user.id,
            commentPostId: data.id,
          },
        }),
      );
      fetchPost();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const renderInputView = () => (
    <View style={styles.inputBar}>
      <TextInput
        value={comment}
        multiline={true}
        onChangeText={handleCommentInput}
        style={styles.commentInput}
        placeholder="Reply to this thread"
        placeholderTextColor={Colors.lightLabel}
      />
      <View style={styles.actionBar}>
        <TouchableOpacity onPress={handleComment} style={styles.postButton}>
          <Text style={styles.postLabel}>Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaContainer>
      <Spinner visible={loading} />
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <Header
            navigation={navigation}
            avatar={Images.avatar1}
            title={location.name}
          />
          <KeyboardAvoidingScrollView
            contentContainerStyle={styles.container}
            style={{ flex: 1 }}
            stickyFooter={renderInputView()}
          >
            <PostItemContainer data={data} navigation={navigation} />
            <View style={styles.repliesContainer}>
              {post?.comments?.items.sort(compareTime).map((item) => (
                <CommentItemContainer key={item.id} data={item} />
              ))}
            </View>
          </KeyboardAvoidingScrollView>
        </View>
      </DismissKeyboard>
    </SafeAreaContainer>
  );
};

export default PostDetail;
