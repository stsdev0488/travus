import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import PropTypes from 'prop-types';
import { scaleH, scaleW } from 'utils/scale';
import Reaction from 'components/Reaction';
import { Colors } from 'config';

const styles = StyleSheet.create({
  viewPager: {
    width: '100%',
    height: scaleH(360),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: scaleH(5),
  },
  feedbackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleH(5),
  },
  businessName: {
    fontSize: scaleH(26),
    lineHeight: scaleH(47),
    fontWeight: '800',
    color: Colors.primary,
    letterSpacing: -0.02,
    marginRight: scaleW(5),
  },
});

const PostBannerThreadItem = ({
  medias,
  reaction,
  businessName,
  onBusinessPress,
  userReaction,
}) => {
  return (
    <View>
      <ViewPager
        style={styles.viewPager}
        initialPage={0}
        showPageIndicator={true}
      >
        {medias.map((media, index) => (
          <View key={index}>
            <Image source={{ uri: media }} style={styles.image} />
          </View>
        ))}
      </ViewPager>
      <View style={styles.feedbackContainer}>
        <TouchableOpacity onPress={() => onBusinessPress(businessName)}>
          <Text style={styles.businessName}>{businessName || ' '}</Text>
        </TouchableOpacity>
        <Reaction data={reaction} userReaction={userReaction} />
      </View>
    </View>
  );
};

PostBannerThreadItem.defaultProps = {
  medias: [],
  reaction: [],
  businessName: '',
  onBusinessPress: () => {},
  userReaction: () => {},
};

PostBannerThreadItem.propTypes = {
  medias: PropTypes.arrayOf(PropTypes.any),
  reaction: PropTypes.arrayOf(PropTypes.any),
  businessName: PropTypes.string,
  onBusinessPress: PropTypes.func,
  userReaction: PropTypes.func,
};

export default PostBannerThreadItem;
