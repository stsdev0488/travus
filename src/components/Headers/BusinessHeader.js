import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import { scaleH, scaleW } from 'utils/scale';
import { Colors, Constants, Images } from 'config';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scaleH(5),
    paddingHorizontal: scaleW(65),
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: scaleH(36),
    fontWeight: '800',
    color: Colors.primary,
    textAlign: 'center',
    marginTop: scaleH(20),
  },
  location: {
    fontSize: scaleH(11),
    lineHeight: scaleH(14),
    color: Colors.label,
    letterSpacing: -0.02,
  },
  left: {
    position: 'absolute',
    top: 0,
    left: scaleW(18),
  },
  right: {
    position: 'absolute',
    top: 0,
    right: scaleW(18),
  },
});

const maxFontSize = 36;
const minFontSize = 15;

const BusinessHeader = ({
  title,
  location,
  right,
  reaction,
  navigation,
}) => {
  const { profile } = useSelector((state) => state.profile);
  const [width, setWidth] = useState(Constants.deviceWidth);
  const [letterToWidthRatio, setLetterToWidthRatio] = useState(
    (title ? title.length : 0) / width,
  );
  const [fontSize, setFontSize] = useState(maxFontSize);
  const toggleDrawer = () => {
    if (navigation) {
      navigation.openDrawer();
    }
  };

  useEffect(() => {
    setLetterToWidthRatio(width / Math.max(title ? title.length : 0, 1));
  }, [title, width]);

  useEffect(() => {
    const size = Math.max(
      Math.min(letterToWidthRatio, maxFontSize),
      minFontSize,
    );
    setFontSize(size);
  }, [title, width, letterToWidthRatio]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.left}>
        <Avatar
          image={profile.image ? { uri: profile.image } : Images.defaultAvatar}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={{ ...styles.title, fontSize: scaleW(fontSize) }}>
          {title}
        </Text>
        <Text style={styles.location}>{location}</Text>
        {reaction}
      </View>
      <View style={styles.right}>{right}</View>
    </View>
  );
};

BusinessHeader.defaultProps = {
  title: '',
  location: '',
  right: null,
  navigation: null,
  reaction: null,
};

BusinessHeader.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  right: PropTypes.node,
  navigation: PropTypes.object,
  reaction: PropTypes.node,
};

export default BusinessHeader;
