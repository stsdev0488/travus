import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    width: scaleH(148),
    height: scaleH(148),
    borderRadius: scaleH(14),
    overflow: 'hidden',
    marginRight: scaleW(15),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

const PostImage = ({ image, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

PostImage.defaultProps = {
  image: null,
  onPress: () => {},
};

PostImage.propTypes = {
  image: PropTypes.any,
  onPress: PropTypes.func,
};

export default PostImage;
