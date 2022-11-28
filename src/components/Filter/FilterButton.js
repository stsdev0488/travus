import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { scaleH, scaleW } from 'utils/scale';
import { Colors } from 'config';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scaleW(3),
    borderRadius: 4,
    overflow: 'hidden',
  },
  label: {
    fontSize: scaleH(12),
    lineHeight: scaleH(20),
    backgroundColor: Colors.primary,
    color: Colors.label,
    paddingHorizontal: scaleW(12),
  },
});

const FilterButton = ({ selected, text, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text
          style={[
            styles.label,
            {
              backgroundColor: selected
                ? Colors.primary
                : 'rgba(228, 228, 231, 0.4)',
              color: selected ? Colors.label : '#8F92A1',
            },
          ]}
        >
          {text}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

FilterButton.defaultProps = {
  selected: false,
  text: '',
  onPress: () => {},
};

FilterButton.propTypes = {
  selected: PropTypes.bool,
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default FilterButton;
