import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Images } from 'config';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.black,
    flexDirection: 'row',
    marginBottom: scaleH(10),
  },
  imageContainer: {
    width: scaleH(85),
    height: scaleH(65),
    borderRadius: scaleH(5),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    marginLeft: scaleW(10),
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  business: {
    fontSize: scaleH(14),
    lineHeight: scaleH(19),
    color: Colors.white,
    marginTop: scaleH(15),
  },
  location: {
    fontSize: scaleH(11),
    lineHeight: scaleH(14),
    color: Colors.white,
  },
});

const SavedItem = ({ data, onPress }) => {
  let images = [];
  data.posts.forEach((post) => {
    images = [...images, ...post.medias];
  });
  console.log('medias ', images);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={!images.length ? Images.defaultBusiness : { uri: images[0] }}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.business}>{data.name}</Text>
        <Text style={styles.location}>{data.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

SavedItem.defaultProps = {
  data: {},
  onPress: () => {},
};

SavedItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  onPress: PropTypes.func,
};

export default SavedItem;
