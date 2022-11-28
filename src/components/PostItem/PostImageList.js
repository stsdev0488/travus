import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import PostImage from 'components/PostItem/PostImage';

const PostImageList = ({ images, onImagePress }) => {
  return (
    <FlatList
      horizontal
      data={images}
      renderItem={({ item, index }) => (
        <PostImage image={item} onPress={() => onImagePress(index)} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

PostImageList.defaultProps = {
  images: [],
  onImagePress: () => {},
};

PostImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any),
  onImagePress: PropTypes.func,
};

export default PostImageList;
