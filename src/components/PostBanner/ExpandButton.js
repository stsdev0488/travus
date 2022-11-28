import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import { scaleH } from 'utils/scale';
import { Colors } from 'config';

const styles = StyleSheet.create({
  container: {
    width: scaleH(28),
    height: scaleH(28),
    borderRadius: scaleH(28),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ExpandButton = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Icon name="plus" color={Colors.white} size={18} />
  </TouchableOpacity>
);

ExpandButton.defaultProps = {
  onPress: () => {},
};

ExpandButton.propTypes = {
  onPress: PropTypes.func,
};

export default ExpandButton;
