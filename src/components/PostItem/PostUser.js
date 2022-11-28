import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { scaleH, scaleW } from 'utils/scale';
import { Colors } from 'config';
import Avatar from 'components/Avatar';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  content: {
    marginLeft: scaleW(12),
  },
  name: {
    fontSize: scaleH(15),
    lineHeight: scaleH(20),
    fontWeight: '600',
    color: Colors.label,
  },
  time: {
    fontSize: scaleH(12),
    lineHeight: scaleH(16),
    color: 'rgba(235, 235, 245, 0.6)',
    marginTop: scaleH(3),
  },
});

const PostUser = ({ image, name, time }) => {
  return (
    <View style={styles.container}>
      <Avatar image={image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

PostUser.defaultProps = {
  image: null,
  name: '',
  time: '',
};

PostUser.propTypes = {
  image: PropTypes.any,
  name: PropTypes.string,
  time: PropTypes.string,
};

export default PostUser;
