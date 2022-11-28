import React, { useState } from 'react';
import { Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Rating from 'react-native-rating';
import GooglePlacesAutoComplete from 'react-native-google-places-autocomplete';
import { API, graphqlOperation } from 'aws-amplify';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import * as Yup from 'yup';
import { Formik } from 'formik';
import uuid from 'uuid-random';
import SafeAreaContainer from 'components/SafeAreaContainer';
import FormInput from 'components/Forms/FormInput';
import FormButton from 'components/Forms/FormButton';
import { Colors, Images, Styles, GoogleApiKey } from 'config';
import { createBusiness } from '../../graphql/mutations';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleW(30),
    paddingTop: scaleH(30),
    paddingBottom: scaleH(60),
  },
  header: {
    color: Colors.white,
    fontSize: scaleH(24),
    fontWeight: '700',
    textAlign: 'center',
  },
  subHeader: {
    color: Colors.white,
    fontSize: scaleH(14),
    textAlign: 'center',
    paddingHorizontal: scaleW(20),
    marginTop: scaleH(5),
    marginBottom: scaleH(25),
  },
  starStyle: {
    width: scaleH(30),
    height: scaleH(20),
    marginRight: scaleW(10),
  },
  ratingGroup: {
    marginVertical: scaleH(13),
  },
  closeSubmit: {
    fontSize: scaleH(14),
    lineHeight: scaleH(19),
    marginTop: scaleH(10),
    color: Colors.label,
    textAlign: 'center',
  },
});

const validationSchema = Yup.object().shape({
  businessName: Yup.string()
    .label('Business Name')
    .required('Please enter a Business Name'),
  website: Yup.string().label('Website').required('Please enter a Website'),
});

const SubmitListing = ({ navigation }) => {
  const user = useSelector((state) => state.profile.profile);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [cleanlinessScore, setCleanlinessScore] = useState(0);
  const [safetyScore, setSafetyScore] = useState(0);
  const [inclusionScore, setInclusionScore] = useState(0);
  const [experienceScore, setExperienceScore] = useState(0);

  const handleSubmitListing = async (values) => {
    setLoading(true);
    try {
      await API.graphql(
        graphqlOperation(createBusiness, {
          input: {
            name: values.businessName,
            mentionName: uuid(),
            verifiedStatus: false,
            address,
            website: values.website,
            cleanlinessScore,
            safetyScore,
            inclusionScore,
            experienceScore,
            businessUserId: user.id,
          },
        }),
      );
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={styles.header}>Submit a listing</Text>
          <Text style={styles.subHeader}>
            We value your experience this is why we created an easy way to add
            some of your favorite places to our special community
          </Text>
          <Formik
            initialValues={{
              businessName: '',
              website: '',
            }}
            onSubmit={(values) => {
              handleSubmitListing(values);
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
                  name="businessName"
                  label="Business Name"
                  labelStyle={Styles.formLabel}
                  inputContainerStyle={Styles.formInput}
                  inputStyle={Styles.formInputStyle}
                  value={values.businessName}
                  onChangeText={handleChange('businessName')}
                  onBlur={handleBlur('businessName')}
                />
                <FormInput
                  name="website"
                  autoCapitalize="none"
                  label="Website"
                  labelStyle={Styles.formLabel}
                  inputContainerStyle={Styles.formInput}
                  inputStyle={Styles.formInputStyle}
                  value={values.website}
                  onChangeText={handleChange('website')}
                  onBlur={handleBlur('website')}
                />
                <Text style={Styles.formLabel}>Address</Text>
                <GooglePlacesAutoComplete
                  getDefaultValue={() => address}
                  filterReverseGeocodingByTypes={[
                    'locality',
                    'administrative_area_level_3',
                  ]}
                  onPress={(data, details = null) => {
                    setAddress(data.description);
                  }}
                  placeholder=""
                  placeholderTextColor="#999999"
                  autoFocus={false}
                  returnKeyType="search"
                  fetchDetails={true}
                  query={{
                    key: GoogleApiKey,
                    language: 'en',
                  }}
                  styles={{
                    container: {
                      zIndex: 99,
                    },
                    textInputContainer: {
                      ...Styles.formInput,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      backgroundColor: 'transparent',
                    },
                    textInput: {
                      ...Styles.formInputStyle,
                      height: '100%',
                      backgroundColor: 'transparent',
                      marginTop: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      paddingLeft: scaleW(14),
                      borderWidth: 1,
                      borderColor: Colors.primary,
                    },
                    listView: {
                      position: 'absolute',
                      top: scaleH(50),
                      backgroundColor: Colors.black,
                    },
                    description: {
                      color: Colors.white,
                    },
                    separator: {
                      backgroundColor: '#013220',
                    },
                    row: {
                      height: scaleH(45),
                      color: Colors.white,
                    },
                    poweredContainer: {
                      display: 'none',
                    },
                  }}
                />
                <View style={{ ...styles.ratingGroup, marginTop: scaleH(35) }}>
                  <Text style={Styles.formLabel}>Cleanliness</Text>
                  <Rating
                    name="cleanlinessRating"
                    onChange={setCleanlinessScore}
                    selectedStar={Images.rating}
                    unselectedStar={Images.ratingOutline}
                    config={{
                      easing: Easing.inOut(Easing.ease),
                      duration: 350,
                    }}
                    stagger={80}
                    maxScale={1.4}
                    starStyle={styles.starStyle}
                  />
                </View>
                <View style={styles.ratingGroup}>
                  <Text style={Styles.formLabel}>Safety</Text>
                  <Rating
                    onChange={setSafetyScore}
                    selectedStar={Images.rating}
                    unselectedStar={Images.ratingOutline}
                    config={{
                      easing: Easing.inOut(Easing.ease),
                      duration: 350,
                    }}
                    stagger={80}
                    maxScale={1.4}
                    starStyle={styles.starStyle}
                  />
                </View>
                <View style={styles.ratingGroup}>
                  <Text style={Styles.formLabel}>Inclusion</Text>
                  <Rating
                    onChange={setInclusionScore}
                    selectedStar={Images.rating}
                    unselectedStar={Images.ratingOutline}
                    config={{
                      easing: Easing.inOut(Easing.ease),
                      duration: 350,
                    }}
                    stagger={80}
                    maxScale={1.4}
                    starStyle={styles.starStyle}
                  />
                </View>
                <View style={styles.ratingGroup}>
                  <Text style={Styles.formLabel}>Experience</Text>
                  <Rating
                    onChange={setExperienceScore}
                    selectedStar={Images.rating}
                    unselectedStar={Images.ratingOutline}
                    config={{
                      easing: Easing.inOut(Easing.ease),
                      duration: 350,
                    }}
                    stagger={80}
                    maxScale={1.4}
                    starStyle={styles.starStyle}
                  />
                </View>
                <View style={{ marginTop: scaleH(30) }}>
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
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.closeSubmit}>
                      Submission Disclosures
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaContainer>
  );
};

export default SubmitListing;
