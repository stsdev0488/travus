import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ProfileTag from 'components/Profile/ProfileTag';

const ProfileTagList = ({ tags, selectedIndex, onItemSelect }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {tags.map((item, index) => (
        <ProfileTag
          key={index}
          count={item.count}
          type={item.type}
          selected={selectedIndex === index}
          onPress={() => onItemSelect(index)}
        />
      ))}
    </View>
  );
};

ProfileTagList.defaultProps = {
  tags: [],
  selectedIndex: -1,
  onItemSelect: () => {},
};

ProfileTagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any),
  selectedIndex: PropTypes.number,
  onItemSelect: PropTypes.func,
};

export default ProfileTagList;
