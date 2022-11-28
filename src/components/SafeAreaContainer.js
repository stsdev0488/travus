import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { Colors, Styles } from 'config';

const SafeAreaContainer = ({ children, style }) => {
  return (
    <SafeAreaView edges={['top']} style={[Styles.container, style]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      {children}
    </SafeAreaView>
  );
};

SafeAreaContainer.defaultProps = {
  children: null,
  style: null,
};

SafeAreaContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.any),
};

export default SafeAreaContainer;
