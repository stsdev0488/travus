import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { scaleH, scaleW } from 'utils/scale';
import { Colors } from 'config';
import Avatar from 'components/Avatar';

const styles = StyleSheet.create({
  replyItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaleH(4),
  },
  replyItemContent: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: scaleW(8),
  },
  replyItemName: {
    fontSize: scaleH(12),
    fontWeight: '600',
    color: Colors.label,
  },
  replyItemText: {
    fontSize: scaleH(12),
    color: Colors.label,
    flex: 1,
    marginLeft: scaleW(5),
  },
});

const CommentItemCollapsed = ({ image, name, text }) => {
  return (
    <View style={styles.replyItemContainer}>
      <Avatar image={image} small />
      <View style={styles.replyItemContent}>
        <Text style={styles.replyItemName}>{name}</Text>
        <Text style={styles.replyItemText} numberOfLines={1}>{text}</Text>
      </View>
    </View>
  );
};

CommentItemCollapsed.defaultProps = {
  image: null,
  name: '',
  text: '',
};

CommentItemCollapsed.propTypes = {
  image: PropTypes.any,
  name: PropTypes.string,
  text: PropTypes.string,
};

export default CommentItemCollapsed;
