import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import Reaction from 'components/Reaction';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    width: scaleH(265),
    height: scaleW(186),
    marginRight: scaleW(20),
    borderRadius: scaleH(5),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  reactionContainer: {
    position: 'absolute',
    bottom: 0,
    right: scaleW(15),
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const PostBannerItem = ({ noReaction, image, reaction, userReaction }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image[0] }} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']}
        position={[0, 0.8, 1]}
        style={styles.mask}
      />
      {!noReaction ? (
        <View style={styles.reactionContainer}>
          <Reaction banner data={reaction} userReaction={userReaction} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

PostBannerItem.defaultProps = {
  image: null,
  reaction: [],
  noReaction: false,
};

PostBannerItem.propTypes = {
  image: PropTypes.any,
  reaction: PropTypes.arrayOf(PropTypes.any),
  noReaction: PropTypes.bool,
};

export default PostBannerItem;
