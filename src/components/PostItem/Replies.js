import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, Images } from 'config';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: scaleH(10),
    paddingLeft: scaleW(10),
    alignItems: 'center',
  },
  image: {
    width: scaleH(30),
    height: scaleH(30),
    borderWidth: 3,
    borderColor: Colors.white,
    borderRadius: scaleH(30),
    overflow: 'hidden',
    marginLeft: scaleW(-10),
  },
  countText: {
    fontSize: scaleH(12),
    marginLeft: scaleW(5),
    color: Colors.lightLabel,
  },
});

const Replies = ({ replies }) => {
  const shortedReplies = replies.slice(0, 3);
  return (
    <View style={styles.container}>
      {shortedReplies.map((item, index) => (
        <Image
          source={
            !item.user
              ? Images.defaultAvatar
              : { uri: item.user?.image || null }
          }
          style={styles.image}
          key={index}
        />
      ))}
      {replies.length ? (
        <Text style={styles.countText}>{`${replies.length} comments`}</Text>
      ) : null}
    </View>
  );
};

export default Replies;
