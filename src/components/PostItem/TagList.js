import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { scaleH } from 'utils/scale';
import { Colors } from 'config';

const styles = StyleSheet.create({
  text: {
    fontSize: scaleH(12),
    lineHeight: scaleH(16),
    fontWeight: '800',
    color: Colors.businessLabel,
  },
});

const TagList = ({ tagList }) => {
  let text = '';
  tagList.forEach((item, index) => {
    if (index === tagList.length - 1) {
      text = text + `#${item}`;
    } else {
      text = text + `#${item}, `;
    }
  });

  return <Text style={styles.text}>{text}</Text>;
};

TagList.defaultProps = {
  tagList: [],
};

TagList.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string),
};

export default TagList;
