import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TextInputMask from 'react-native-text-input-mask';
import HyperLink from 'react-native-hyperlink';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import { showMessage } from 'react-native-flash-message';
import { Auth } from 'aws-amplify';
import FormButton from 'components/Forms/FormButton';
import SafeAreaContainer from 'components/SafeAreaContainer';
import { Colors, Styles } from 'config';
import { AuthActions } from 'reduxs/actions';
import { scaleH, scaleW } from 'utils/scale';
import { openLink } from 'utils/link';
import { MaterialIndicator } from 'react-native-indicators';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);

  const signIn = () => {
    setLoading(true);
    Auth.signIn(`+1${number}`)
      .then((result) => {
        console.log('result ', result);
        setSession(result);
        setLoading(false);
        navigation.navigate('ConfirmCode', { number, session: result });
      })
      .catch((e) => {
        if (e.code === 'UserNotFoundException') {
          signUp();
        } else if (e.code === 'UsernameExistsException') {
          signIn();
        } else {
          setLoading(false);
          console.log(e.code);
          console.error('sign in error ', e);
          showMessage({
            type: 'error',
            message: 'Sign in error!',
          });
        }
      });
  };

  const signUp = async () => {
    const result = await Auth.signUp({
      username: `+1${number}`,
      password: 'password',
      attributes: {
        phone_number: `+1${number}`,
      },
    })
      .then(() => signIn())
      .catch((error) => {
        console.log('signup error ', error); // After signUp, we are going to signIn()
        showMessage({
          type: 'error',
          message: 'Sign up error!',
        });
      });
    return result;
  };

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <MaterialIndicator color={Colors.primary} />
    </View>
  );

  const renderForm = () => (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Enter your phone</Text>
        <TextInputMask
          value={number}
          style={styles.number}
          keyboardType="number-pad"
          mask="+1 ([000]) [000]-[0000]"
          placeholder="Mobile Number"
          placeholderTextColor={Colors.lightLabel}
          editable={false}
        />
        <HyperLink
          linkStyle={[styles.policy, { textDecorationLine: 'underline' }]}
          linkText={(url) => {
            if (url === 'https://terms') {
              return 'Terms';
            } else if (url === 'https://sign') {
              return 'E-sign Content';
            } else if (url === 'https://policy') {
              return 'Privacy Policy';
            } else {
              return url;
            }
          }}
          onPress={(url) => openLink(url)}
        >
          <View>
            <Text style={styles.policy}>
              By entering and tapping Next, you agree to the https://terms,
              <Text> https://sign & </Text>
              <Text>https://policy</Text>
            </Text>
          </View>
        </HyperLink>
      </View>
      <View>
        <View style={styles.numberPad}>
          <VirtualKeyboard
            onPress={(val) => setNumber(val)}
            color={Colors.white}
            pressMode="string"
            style={{ width: '100%' }}
          />
        </View>
        <FormButton
          buttonStyle={Styles.formButton}
          titleStyle={Styles.formButtonTitle}
          disabledStyle={Styles.formDisabledButton}
          disabledTitleStyle={Styles.formDisabledButtonText}
          onPress={signIn}
          title="Next"
          // disabled={!isValid || loading}
          loading={loading}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaContainer>
      {loading ? renderLoading() : renderForm()}
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleW(25),
    paddingTop: scaleH(110),
    paddingBottom: scaleH(40),
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginTop: scaleH(30),
  },
  header: {
    fontSize: scaleH(36),
    fontWeight: '800',
    color: Colors.label,
    letterSpacing: -0.02,
    paddingLeft: scaleW(30),
  },
  number: {
    fontSize: scaleH(18),
    fontWeight: '800',
    color: Colors.lightLabel,
    marginTop: scaleH(30),
    marginBottom: scaleH(20),
    paddingLeft: scaleW(30),
  },
  policy: {
    fontSize: scaleH(14),
    lineHeight: scaleH(20),
    color: Colors.label,
    paddingLeft: scaleW(30),
  },
  numberPad: {
    marginBottom: scaleH(60),
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
