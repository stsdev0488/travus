import {
  RESTORE_PROFILE_REQUEST,
  RESTORE_PROFILE_SUCCESS,
  RESTORE_PROFILE_ERROR,
  SET_PROFILE,
} from 'reduxs/actions/profile';

const initialState = {
  profile: {},
  loading: false,
  success: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESTORE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case RESTORE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        profile: action.payload,
      };
    case RESTORE_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}
