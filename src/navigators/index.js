import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import AuthLoading from 'screens/AuthLoading';
import Login from 'screens/auth/Login';
import ConfirmCode from 'screens/auth/ConfirmCode';
import Pending from 'screens/auth/Pending';
import Home from 'screens/private/Home';
import SignUp from 'screens/auth/Signup';
import OnBoarding from 'screens/auth/OnBoarding';
import City from 'screens/private/City';
import Profile from 'screens/private/Profile';
import EditProfile from 'screens/private/EditProfile';
import CityThread from 'screens/private/CityThread';
import CityGridView from 'screens/private/CityGridView';
import PostDetail from 'screens/private/PostDetail';
import Business from 'screens/private/Business';
import SubmitListing from 'screens/private/SubmitListing';
import DrawerContent from 'components/DrawerContent';
import { AuthActions } from 'reduxs/actions';

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName="OnBoarding">
      {/*<AuthStack.Screen name="OnBoarding" component={OnBoarding} />*/}
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ConfirmCode" component={ConfirmCode} />
      <AuthStack.Screen name="Pending" component={Pending} />
      {/*<AuthStack.Screen name="SignUp" component={SignUp} />*/}
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainNavigator = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="City" component={City} />
      <MainStack.Screen name="CityThread" component={CityThread} />
      <MainStack.Screen name="CityGridView" component={CityGridView} />
      <MainStack.Screen name="CommentDetail" component={PostDetail} />
      <MainStack.Screen name="Business" component={Business} />
    </MainStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="SubmitListing" component={SubmitListing} />
    </ProfileStack.Navigator>
  );
};

const MainDrawerStack = createDrawerNavigator();
const MainDrawerNavigator = () => {
  return (
    <MainDrawerStack.Navigator
      initialRoute="MainDrawer"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <MainDrawerStack.Screen name="MainDrawer" component={MainNavigator} />
      <MainDrawerStack.Screen
        name="ProfileDrawer"
        component={ProfileNavigator}
      />
    </MainDrawerStack.Navigator>
  );
};

const AppStack = createStackNavigator();
const AppNavigator = () => {
  const dispatch = useDispatch();
  const { initialLoading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let user;

      try {
        user = await AsyncStorage.getItem('user');
      } catch (e) {
        // Restoring token failed
      }

      setTimeout(
        () =>
          dispatch(
            AuthActions.restoreToken(user !== null ? JSON.parse(user) : null),
          ),
        1000,
      );
      // dispatch(restoreToken(user !== null ? JSON.parse(user) : null));
    };
    bootstrapAsync();
  }, [dispatch]);

  return (
    <AppStack.Navigator>
      {initialLoading ? (
        <AppStack.Screen
          name="AuthLoading"
          component={AuthLoading}
          options={{ headerShown: false }}
        />
      ) : !user ? (
        <AppStack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <AppStack.Screen
          name="Main"
          component={MainDrawerNavigator}
          options={{ headerShown: false }}
        />
      )}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
