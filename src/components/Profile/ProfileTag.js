import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'config';
import { format_count } from "utils/count";
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: scaleW(10),
  },
  typeText: {
    fontSize: scaleH(12),
    lineHeight: scaleH(16),
    color: Colors.lightLabel,
  },
  countText: {
    fontSize: scaleH(16),
    lineHeight: scaleH(20),
    color: Colors.white,
  },
});

const ProfileTag = ({ count, type, selected, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text
          style={{
            ...styles.countText,
            color: selected ? Colors.primary : Colors.white,
          }}
        >
          {format_count(count)}
        </Text>
        <Text
          style={{
            ...styles.typeText,
            color: selected ? Colors.primary : Colors.lightLabel,
          }}
        >
          {type}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

ProfileTag.defaultProps = {
  count: 0,
  type: '',
  selected: false,
  onPress: () => {},
};

ProfileTag.propTypes = {
  count: PropTypes.number,
  type: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
};

export default ProfileTag;
