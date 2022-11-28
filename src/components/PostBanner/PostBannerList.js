import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import ExpandButton from 'components/PostBanner/ExpandButton';
import { scaleH } from 'utils/scale';
import PostItemContainer from 'containers/PostItemContainer';

const PostBannerList = ({ posts, onPress }) => {
  return (
    <View>
      <FlatList
        horizontal
        data={posts}
        renderItem={({ item, index }) => (
          <PostItemContainer banner key={item.id} data={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ alignItems: 'flex-end', marginTop: scaleH(5) }}>
        <ExpandButton onPress={onPress} />
      </View>
    </View>
  );
};

PostBannerList.defaultProps = {
  posts: [],
  onPress: () => {},
};

PostBannerList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any),
  onPress: PropTypes.func,
};

export default PostBannerList;
