import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import { Colors, Constants, Images } from 'config';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: scaleH(5),
    paddingBottom: scaleH(15),
    paddingHorizontal: scaleW(65),
  },
  title: {
    fontSize: scaleH(36),
    fontWeight: '800',
    color: Colors.label,
    textAlign: 'center',
    marginTop: scaleH(20),
  },
  titleContainer: {
    flex: 1,
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

const Header = ({ title, right, navigation }) => {
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
      <View
        style={styles.titleContainer}
        onLayout={({ nativeEvent: { layout } }) => setWidth(layout.width)}
      >
        <Text style={{ ...styles.title, fontSize: scaleW(fontSize) }}>
          {title}
        </Text>
      </View>
      <View style={styles.right}>{right}</View>
    </View>
  );
};

Header.defaultProps = {
  avatar: null,
  title: '',
  right: null,
  navigation: null,
};

Header.propTypes = {
  avatar: PropTypes.any,
  title: PropTypes.string,
  right: PropTypes.node,
  navigation: PropTypes.object,
};

export default Header;
