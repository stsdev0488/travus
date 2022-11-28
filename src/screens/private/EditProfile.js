import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { request, PERMISSIONS } from 'react-native-permissions';
import Amplify, { API, graphqlOperation, Storage } from 'aws-amplify';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { decode } from 'base64-arraybuffer';
import fileExtension from 'file-extension';
import SafeAreaContainer from 'components/SafeAreaContainer';
import DismissKeyboard from 'components/DismissKeyboard';
import ProfileTagList from 'components/Profile/ProfileTagList';
import FormButton from 'components/Forms/FormButton';
import FormInput from 'components/Forms/FormInput';
import { Colors, imagePickerOptions, Images, Styles } from 'config';
import { updateUser } from '../../graphql/mutations';
import { AuthActions, ProfileActions } from 'reduxs/actions';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleW(30),
  },
  scrollContainer: {
    paddingTop: scaleH(20),
  },
  headerContainer: {
    alignItems: 'center',
  },
  tagListContainer: {
    marginTop: scaleH(25),
    marginBottom: scaleH(50),
    paddingVertical: scaleH(10),
  },
  deleteAccount: {
    fontSize: scaleH(14),
    lineHeight: scaleH(19),
    marginTop: scaleH(10),
    color: Colors.label,
    textAlign: 'center',
  },
  uploadAvatarIcon: {
    padding: scaleH(5),
  },
});

const validationSchema = Yup.object().shape({
  name: Yup.string().label('Full Name').required('Please enter a Full Name'),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered Email'),
  phone: Yup.string().label('Password').required('Please enter Phone Number'),
  location: Yup.string().label('Location').required('Please enter Location'),
});

const EditProfile = ({ navigation, route }) => {
  const { tags } = route.params;
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const [avatar, setAvatar] = useState(
    profile.image ? { uri: profile.image } : null,
  );
  const [loading, setLoading] = useState(false);

  const handleUploadAvatar = async () => {
    await request(PERMISSIONS.IOS.CAMERA);
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        ...imagePickerOptions,
      });
      if (!result.cancelled) {
        const extension = fileExtension(result.uri);
        setAvatar({
          uri: `data:${result.type}/${extension};base64,${result.base64}`,
          data: result.base64,
          type: `${result.type}/${extension}`,
          extension,
        });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const handleUpdateProfile = async (values) => {
    if (avatar) {
      try {
        setLoading(true);
        let updatedUser;
        if (avatar.data) {
          const uploadResponse = await Storage.put(
            `images/${profile.id}-avatar.${avatar.extension}`,
            decode(avatar.data),
            {
              contentType: avatar.type,
              compressImageQuality: undefined,
            },
          );
          const imageUrl = await Storage.get(uploadResponse.key, {
            level: 'public',
          });
          const urls = imageUrl.split('?');
          updatedUser = await API.graphql(
            graphqlOperation(updateUser, {
              input: { id: profile.id, ...values, image: urls[0] },
            }),
          );
        } else {
          updatedUser = await API.graphql(
            graphqlOperation(updateUser, {
              input: { id: profile.id, ...values, image: profile.image },
            }),
          );
        }
        await AsyncStorage.setItem(
          'profile',
          JSON.stringify(updatedUser.data.updateUser),
        );
        dispatch(ProfileActions.setProfile(updatedUser.data.updateUser));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      setLoading(true);
      const updatedUser = await API.graphql(
        graphqlOperation(updateUser, {
          input: { id: profile.id, ...values, image: null },
        }),
      );
      await AsyncStorage.setItem(
        'profile',
        JSON.stringify(updatedUser.data.updateUser),
      );
      dispatch(ProfileActions.setProfile(updatedUser.data.updateUser));
      setLoading(false);
    }
  };

  return (
    <SafeAreaContainer>
      <DismissKeyboard>
        <View style={{ flex: 1, paddingHorizontal: scaleW(30) }}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.headerContainer}>
              <Avatar
                size="large"
                source={avatar || Images.defaultAvatar}
                rounded
              />
              <TouchableOpacity
                onPress={handleUploadAvatar}
                style={styles.uploadAvatarIcon}
              >
                <Icon name="edit" size={20} color="grey" />
              </TouchableOpacity>
            </View>
            <View style={styles.tagListContainer}>
              <ProfileTagList tags={tags} />
            </View>
            <Formik
              initialValues={{
                name: profile.name,
                email: profile.email,
                phone: profile.phone,
                location: profile.location,
              }}
              onSubmit={(values) => {
                handleUpdateProfile(values);
              }}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                values,
                handleSubmit,
                errors,
                isValid,
                touched,
                handleBlur,
              }) => (
                <View>
                  <FormInput
                    name="name"
                    label="Full Name"
                    labelStyle={Styles.formLabel}
                    inputContainerStyle={Styles.formInput}
                    inputStyle={Styles.formInputStyle}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                  <FormInput
                    name="email"
                    label="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    labelStyle={Styles.formLabel}
                    inputContainerStyle={Styles.formInput}
                    inputStyle={Styles.formInputStyle}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  <FormInput
                    name="phone"
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    label="Phone"
                    labelStyle={Styles.formLabel}
                    inputContainerStyle={Styles.formInput}
                    inputStyle={Styles.formInputStyle}
                    onBlur={handleBlur('phone')}
                  />
                  <FormInput
                    name="location"
                    value={values.location}
                    onChangeText={handleChange('location')}
                    label="Location"
                    labelStyle={Styles.formLabel}
                    inputContainerStyle={Styles.formInput}
                    inputStyle={Styles.formInputStyle}
                    onBlur={handleBlur('location')}
                  />
                  <View style={{ marginTop: scaleH(30) }}>
                    <View style={{ marginBottom: scaleH(10) }}>
                      <FormButton
                        buttonStyle={{
                          ...Styles.formButton,
                          backgroundColor: Colors.primary,
                        }}
                        titleStyle={{
                          ...Styles.formButtonTitle,
                          color: Colors.label,
                        }}
                        onPress={handleSubmit}
                        title="Save"
                        loading={loading}
                        disabled={!isValid && loading}
                      />
                    </View>
                    <FormButton
                      buttonStyle={{
                        ...Styles.formButton,
                        backgroundColor: Colors.primary,
                      }}
                      titleStyle={{
                        ...Styles.formButtonTitle,
                        color: Colors.label,
                      }}
                      onPress={() => dispatch(AuthActions.logout())}
                      title="Sign Out"
                    />
                    <TouchableOpacity>
                      <Text style={styles.deleteAccount}>Delete Account</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </KeyboardAwareScrollView>
        </View>
      </DismissKeyboard>
    </SafeAreaContainer>
  );
};

export default EditProfile;
