import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';

const Filter = ({ options, selectedOption, onItemPress }) => {
  return (
    <FlatList
      horizontal
      data={options}
      renderItem={({ item, index }) => (
        <FilterButton
          text={item}
          selected={selectedOption === item}
          onPress={() => onItemPress(item)}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

Filter.defaultProps = {
  options: [],
  selectedOption: '',
  onItemPress: () => {},
};

Filter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any),
  selectedOption: PropTypes.string,
  onItemPress: PropTypes.func,
};

export default Filter;
