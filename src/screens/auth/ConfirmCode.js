import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Auth } from 'aws-amplify';
import { MaterialIndicator } from 'react-native-indicators';
import { showMessage } from 'react-native-flash-message';
import DismissKeyboard from 'components/DismissKeyboard';
import FormButton from 'components/Forms/FormButton';
import SafeAreaContainer from 'components/SafeAreaContainer';
import { Colors, Styles } from 'config';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleW(25),
    paddingTop: scaleH(100),
    justifyContent: 'space-between',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: scaleH(26),
    lineHeight: scaleH(35),
    fontWeight: '800',
    letterSpacing: -0.02,
    color: Colors.label,
    paddingLeft: scaleW(30),
  },
  confirmField: {
    fontSize: scaleH(18),
    fontWeight: '800',
    color: Colors.lightLabel,
    marginTop: scaleH(30),
    marginBottom: scaleH(20),
    paddingLeft: scaleW(30),
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resend: {
    fontSize: scaleH(14),
    fontWeight: '800',
    color: Colors.primary,
  },
});

const ConfirmCode = ({ navigation, route }) => {
  const { number, session } = route.params;
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');

  const verifyOtp = () => {
    console.log('otp ', otp);
    setLoading(true);
    Auth.sendCustomChallengeAnswer(session, otp)
      .then((user) => {
        console.log('user ', user);
        setLoading(false);
        navigation.navigate('Pending', { user });
      })
      .catch((err) => {
        console.log('error ', err);
        setOtp('');
        setLoading(false);
        showMessage({
          type: 'error',
          message: 'Invalid Otp!',
        });
      });
  };

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <MaterialIndicator color={Colors.primary} />
    </View>
  );

  const renderForm = () => {
    return (
      <DismissKeyboard>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View>
            <Text style={styles.header}>
              {`Please enter the code sent to (${number.substr(
                0,
                3,
              )}) ${number.substr(3, 3)}-${number.substr(6, 4)}`}
            </Text>
            <TextInput
              style={styles.confirmField}
              placeholder="Confirmation Code"
              value={otp}
              onChangeText={setOtp}
              placeholderTextColor={Colors.lightLabel}
              keyboardType="number-pad"
            />
            <View style={styles.resendContainer}>
              <TouchableOpacity>
                <Text style={styles.resend}>Resend Code</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: scaleH(40) }}>
            <FormButton
              buttonStyle={Styles.formButton}
              titleStyle={Styles.formButtonTitle}
              disabledStyle={Styles.formDisabledButton}
              disabledTitleStyle={Styles.formDisabledButtonText}
              onPress={verifyOtp}
              title="Next"
              disabled={loading}
              loading={loading}
            />
            <View style={{ marginTop: scaleH(15) }}>
              <FormButton
                buttonStyle={{
                  ...Styles.formButton,
                  borderColor: 'transparent',
                }}
                titleStyle={Styles.formButtonTitle}
                disabledStyle={Styles.formDisabledButton}
                disabledTitleStyle={Styles.formDisabledButtonText}
                onPress={() => navigation.goBack()}
                title="Back"
                // disabled={!isValid || loading}
                loading={loading}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    );
  };

  return (
    <SafeAreaContainer>
      {loading ? renderLoading() : renderForm()}
    </SafeAreaContainer>
  );
};

export default ConfirmCode;
