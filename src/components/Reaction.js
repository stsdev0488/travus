import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { Colors } from 'config';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    width: scaleW(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scaleH(5),
    paddingHorizontal: scaleW(10),
  },
  label: {
    fontSize: scaleH(11),
    color: Colors.reactionLabel,
    marginLeft: scaleW(5),
  },
});

const ReactionItem = ({ type, count, userReaction }) => {
  const renderIcon = () => {
    switch (type) {
      case 'heart':
        return (
          <FeatherIcon
            name="heart"
            size={scaleH(16)}
            color={Colors.reactionLabel}
          />
        );
      case 'dislike':
        return (
          <MaterialIcon
            name="thumb-down"
            size={scaleH(15)}
            color={Colors.label}
          />
        );
      case 'comment':
        return (
          <FeatherIcon
            name="message-circle"
            size={scaleH(17)}
            color={Colors.reactionLabel}
          />
        );
      case 'like':
        return (
          <MaterialIcon
            name="thumb-up"
            size={scaleH(15)}
            color={Colors.label}
          />
        );
      case 'flag':
        return (
          <MaterialIcon
            name="flag"
            size={scaleH(19)}
            color="rgba(237, 17, 17, 0.54)"
          />
        );
    }
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => userReaction(type)}
    >
      {renderIcon()}
      <Text style={styles.label}>{count}</Text>
    </TouchableOpacity>
  );
};

const Reaction = ({ data, userReaction, skipNull, banner, business }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        if (!skipNull) {
          if (business) {
            if (
              item.type === 'flag' ||
              item.type === 'heart' ||
              item.type === 'comment'
            ) {
              return (
                <ReactionItem
                  key={index}
                  type={item.type}
                  count={item.count}
                  userReaction={userReaction}
                />
              );
            } else {
              return null;
            }
          } else if (banner) {
            if (
              item.type === 'like' ||
              item.type === 'dislike' ||
              item.type === 'comment'
            ) {
              return (
                <ReactionItem
                  key={index}
                  type={item.type}
                  count={item.count}
                  userReaction={userReaction}
                />
              );
            } else {
              return null;
            }
          } else {
            return (
              <ReactionItem
                key={index}
                type={item.type}
                count={item.count}
                userReaction={userReaction}
              />
            );
          }
        } else {
          if (item.count) {
            return (
              <ReactionItem
                key={index}
                type={item.type}
                count={item.count}
                userReaction={userReaction}
              />
            );
          } else {
            return null;
          }
        }
      })}
    </View>
  );
};

ReactionItem.defaultProps = {
  type: '',
  count: 0,
};

ReactionItem.propTypes = {
  type: PropTypes.string,
  count: PropTypes.number,
};

Reaction.defaultProps = {
  data: [],
  userReaction: () => {},
  skipNull: false,
  business: false,
};

Reaction.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  userReaction: PropTypes.func,
  skipNull: PropTypes.bool,
  business: PropTypes.bool,
};

export default Reaction;
