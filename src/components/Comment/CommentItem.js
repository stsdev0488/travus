import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Popover from 'react-native-popover-view';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import Reaction from 'components/Reaction';
import ReactionPopoverPanel from 'components/ReactionPopoverPanel';
import CommentItemCollapsed from 'components/Comment/CommentItemCollapsed';
import { Colors, Images } from 'config';
import { scaleH, scaleW } from 'utils/scale';
import { compareTime, getTimeDiff } from 'utils/timediff';

const styles = StyleSheet.create({
  container: {
    marginBottom: scaleH(15),
  },
  commentItemContainer: {
    flexDirection: 'row',
  },
  commentItemContent: {
    flex: 1,
    backgroundColor: '#9597A119',
    borderRadius: scaleH(16),
    padding: scaleW(12),
    marginLeft: scaleW(8),
  },
  commentItemName: {
    fontSize: scaleH(14),
    lineHeight: scaleH(19),
    color: Colors.label,
  },
  commentItemText: {
    fontSize: scaleH(12),
    lineHeight: scaleH(19),
    color: Colors.label,
    marginTop: scaleH(5),
  },
  actionContainer: {
    paddingLeft: scaleW(55),
  },
  actionText: {
    fontSize: scaleH(12),
    fontWeight: '600',
    lineHeight: scaleH(15),
    color: Colors.lightLabel,
    marginVertical: scaleH(3),
  },
  popoverArrow: {
    width: 0,
    height: 0,
  },
  popover: {
    backgroundColor: 'transparent',
  },
  reactionContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: scaleH(12),
    lineHeight: scaleH(16),
    color: 'rgba(235, 235, 245, 0.6)',
  },
  commentItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const CommentItem = ({
  image,
  name,
  text,
  createdAt,
  handleReaction,
  reactions,
  replys,
  reactPopoverVisible,
  reactPopoverShow,
  reactPopoverClose,
  replyPopoverShow,
}) => {
  const touchable = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.commentItemContainer}>
        <Avatar image={image} />
        <View style={styles.commentItemContent}>
          <View style={styles.commentItemHeader}>
            <Text style={styles.commentItemName}>{name}</Text>
            <Text style={styles.time}>
              {createdAt
                ? `${getTimeDiff(new Date(createdAt), new Date())} ago`
                : ''}
            </Text>
          </View>
          <Text style={styles.commentItemText}>{text}</Text>
        </View>
      </View>
      <View style={styles.reactionContainer}>
        <Reaction data={reactions} skipNull />
      </View>
      <View style={styles.actionContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={replyPopoverShow}>
            <Text style={styles.actionText}>Reply</Text>
          </TouchableOpacity>
          <TouchableOpacity ref={touchable} onPress={reactPopoverShow}>
            <Text style={[styles.actionText, { marginLeft: scaleW(8) }]}>
              React
            </Text>
          </TouchableOpacity>
        </View>
        {replys?.length > 3 ? (
          <TouchableOpacity>
            <Text style={styles.showMoreText}>
              {`Show ${replys?.length - 3} more replies`}
            </Text>
          </TouchableOpacity>
        ) : null}
        {replys?.sort(compareTime).map((item) => (
          <CommentItemCollapsed
            key={item.id}
            image={
              item.user.image ? { uri: item.user.image } : Images.defaultAvatar
            }
            name={item.user.name}
            text={item.message}
          />
        ))}
      </View>
      <Popover
        arrowStyle={styles.popoverArrow}
        popoverStyle={styles.popover}
        placement={'top' || 'bottom'}
        from={touchable}
        isVisible={reactPopoverVisible}
        onRequestClose={reactPopoverClose}
      >
        <ReactionPopoverPanel handleReaction={handleReaction} />
      </Popover>
    </View>
  );
};

CommentItem.defaultProps = {
  image: null,
  name: '',
  text: '',
};

CommentItem.propTypes = {
  image: PropTypes.any,
  name: PropTypes.string,
  text: PropTypes.string,
};

export default CommentItem;
