import * as ImagePicker from 'expo-image-picker';
import * as Colors from './colors';
import * as Constants from './constants';
import * as Images from './images';
import * as Styles from './styles';

const API_URL = 'https://api.travus.com';
const GoogleApiKey = 'AIzaSyChniBozqjbVZCAIqy84IOz-S6wZ8pLoT4';

const imagePickerOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  allowsEditing: false,
  base64: true,
};

export {
  API_URL,
  GoogleApiKey,
  Colors,
  Constants,
  Images,
  Styles,
  imagePickerOptions,
};
