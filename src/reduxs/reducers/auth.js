import AsyncStorage from '@react-native-community/async-storage';
import {
  RESTORE_TOKEN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from '../actions/auth';

const initialState = {
  initialLoading: true,
  loading: false,
  error: null,
  success: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        initialLoading: false,
        user: action.payload,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        user: action.payload,
      };
    case AUTH_LOGOUT:
      AsyncStorage.clear();
      return {
        loading: false,
        success: false,
        error: null,
        user: null,
      };
    default:
      return state;
  }
}
