import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import Prompt from 'react-native-input-prompt';
import { API, graphqlOperation } from 'aws-amplify';
import CommentItem from 'components/Comment/CommentItem';
import { getComment } from '../graphql/queries';
import {
  createCommentReaction,
  createCommentReply,
} from '../graphql/mutations';

const CommentItemContainer = ({ data, reactComment }) => {
  const user = useSelector((state) => state.profile.profile);
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(false);
  const [showReactPopover, setShowReactPopover] = useState(false);
  const [showReplyPopover, setShowReplyPopover] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');

  const fetchComment = async () => {
    setLoading(true);
    try {
      const res = await API.graphql(
        graphqlOperation(getComment, { id: data.id }),
      );
      setComment(res.data.getComment);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleCommentReaction = async (type) => {
    setShowReactPopover(false);
    try {
      setLoading(true);
      await API.graphql(
        graphqlOperation(createCommentReaction, {
          input: {
            reactionType: type.toUpperCase(),
            commentReactionCommentId: comment.id,
            commentReactionUserId: user.id,
          },
        }),
      );
      fetchComment();
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCommentReply = async (text) => {
    setLoading(true);
    try {
      await API.graphql(
        graphqlOperation(createCommentReply, {
          input: {
            message: text,
            commentReplyUserId: user.id,
            commentReplyCommentId: comment.id,
          },
        }),
      );
    } catch (e) {
      console.log(e);
    }
    fetchComment();
    setLoading(false);
  };

  const reactions = useMemo(() => {
    let likes = 0,
      dislikes = 0,
      flags = 0,
      hearts = 0;
    comment?.commentReactions?.items?.forEach((item) => {
      if (item.reactionType === 'LIKE') {
        likes += 1;
      } else if (item.reactionType === 'DISLIKE') {
        dislikes += 1;
      } else if (item.reactionType === 'HEART') {
        hearts += 1;
      } else if (item.reactionType === 'FLAG') {
        flags += 1;
      }
    });

    return [
      {
        type: 'like',
        count: likes,
      },
      {
        type: 'dislike',
        count: dislikes,
      },
      {
        type: 'heart',
        count: hearts,
      },
      {
        type: 'flag',
        count: flags,
      },
    ];
  }, [comment]);

  useEffect(() => {
    fetchComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log('comment ', comment)
  if (loading) {
    return <ActivityIndicator />;
  } else {
    return (
      <>
        <CommentItem
          name={comment.user?.name}
          text={comment.message}
          image={{ uri: comment.user?.image }}
          createdAt={comment.createdAt}
          handleReaction={handleCommentReaction}
          reactions={reactions}
          replys={comment.commentReplys?.items}
          reactPopoverVisible={showReactPopover}
          reactPopoverShow={() => setShowReactPopover(true)}
          reactPopoverClose={() => setShowReactPopover(false)}
          replyPopoverShow={() => setShowReplyPopover(true)}
        />
        <Prompt
          visible={showReplyPopover}
          title="Reply"
          placeholder="Reply"
          placeholderTextColor="red"
          submitText="Reply"
          onCancel={() => {
            setShowReplyPopover(false);
            setReplyMessage('');
          }}
          onSubmit={(text) => {
            setShowReplyPopover(false);
            setReplyMessage(text);
            handleCommentReply(text);
          }}
        />
      </>
    );
  }
};

export default CommentItemContainer;
