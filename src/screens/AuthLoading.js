import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import Container from 'components/Container';
import { Colors } from 'config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});

const AuthLoading = () => {
  return (
    <Container style={styles.container}>
      <MaterialIndicator color={Colors.primary} />
    </Container>
  );
};

export default AuthLoading;
