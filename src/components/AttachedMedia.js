import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from 'config';
import { scaleH } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    width: scaleH(50),
    height: scaleH(50),
    marginHorizontal: scaleH(6),
    marginVertical: scaleH(12),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: scaleH(-14),
    right: scaleH(-14),
    padding: 5,
  },
});

const AttachedMedia = ({ image, onClose }) => {
  console.log('image ', image)
  return (
    <View style={styles.container}>
      <Image source={{ uri: image.uri }} style={styles.image} />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Icon name="closecircleo" size={scaleH(18)} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default AttachedMedia;
