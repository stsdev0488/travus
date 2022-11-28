import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { scaleH } from 'utils/scale';

const styles = StyleSheet.create({
  avatar: {
    width: scaleH(40),
    height: scaleH(40),
    borderRadius: scaleH(40),
    resizeMode: 'cover',
  },
  avatarSmall: {
    width: scaleH(24),
    height: scaleH(24),
    borderRadius: scaleH(24),
    resizeMode: 'cover',
  },
});

const Avatar = ({ image, small }) => {
  if (small) {
    return <Image source={image} style={styles.avatarSmall} />;
  } else {
    return <Image source={image} style={styles.avatar} />;
  }
};

Avatar.defaultProps = {
  image: null,
  small: false,
};

Avatar.propTypes = {
  image: PropTypes.any,
  small: PropTypes.bool,
};

export default Avatar;
