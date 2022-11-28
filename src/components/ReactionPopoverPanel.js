import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'config';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleW(10),
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: scaleH(45),
    height: scaleH(45),
  },
  icon: {
    paddingHorizontal: scaleH(8),
  },
});

const icons = ['like', 'dislike', 'heart', 'flag'];

const ReactionPopoverPanel = ({ handleReaction }) => {
  const renderIcon = (type) => {
    switch (type) {
      case 'heart':
        return (
          <FeatherIcon
            name="heart"
            size={scaleH(24)}
            color={Colors.reactionLabel}
          />
        );
      case 'dislike':
        return (
          <MaterialIcon
            name="thumb-down"
            size={scaleH(24)}
            color={Colors.label}
          />
        );
      case 'like':
        return (
          <MaterialIcon
            name="thumb-up"
            size={scaleH(23)}
            color={Colors.label}
          />
        );
      case 'flag':
        return (
          <MaterialIcon
            name="flag"
            size={scaleH(27)}
            color="rgba(237, 17, 17, 0.54)"
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          style={styles.icon}
          onPress={() => handleReaction(icon)}
        >
          {renderIcon(icon)}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ReactionPopoverPanel;
