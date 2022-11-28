import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import SafeAreaContainer from 'components/SafeAreaContainer';
import { Colors, Images } from 'config';
import { createUser } from '../../graphql/mutations';
import { listUsers } from '../../graphql/queries';
import { scaleH, scaleW } from 'utils/scale';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthActions } from 'reduxs/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: scaleH(24),
    fontWeight: '800',
    color: Colors.label,
    marginBottom: scaleH(25),
  },
  logo: {
    width: scaleH(130),
    height: scaleH(130),
    resizeMode: 'stretch',
  },
});

const Pending = ({ navigation, route }) => {
  const { user } = route.params;
  const dispatch = useDispatch();
  console.log('user ', user);

  const fetchUser = async () => {
    const userData = {
      phone: user.attributes.phone_number,
      tokens: user.signInUserSession,
    };
    let profileData;
    let profile;
    profileData = await API.graphql(
      graphqlOperation(listUsers, {
        filter: { phone: { eq: userData.phone } },
      }),
    );
    if (!profileData.data.listUsers.items.length) {
      profileData = await API.graphql(
        graphqlOperation(createUser, {
          input: { id: userData.phone, phone: userData.phone },
        }),
      );
      profile = profileData.data.createUser;
    } else {
      profile = profileData.data.listUsers.items[0];
    }
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    await AsyncStorage.setItem('profile', JSON.stringify(profile));
    dispatch(AuthActions.loginSuccess(userData));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const renderWelcome = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Travus!</Text>
        <Image source={Images.logo} style={styles.logo} />
      </View>
    );
  };

  return <SafeAreaContainer>{renderWelcome()}</SafeAreaContainer>;
};

export default Pending;
