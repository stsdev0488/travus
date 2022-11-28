import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {
  RESTORE_PROFILE,
  RESTORE_PROFILE_REQUEST,
  RESTORE_PROFILE_SUCCESS,
  RESTORE_PROFILE_ERROR,
} from 'reduxs/actions/profile';

function* restoreProfile() {
  try {
    yield put({ type: RESTORE_PROFILE_REQUEST });
    const profile = yield call(() => AsyncStorage.getItem('profile'));
    if (profile) {
      yield put({
        type: RESTORE_PROFILE_SUCCESS,
        payload: JSON.parse(profile),
      });
    } else {
      yield put({ type: RESTORE_PROFILE_ERROR, payload: 'Get profile error!' });
    }
  } catch (e) {
    yield put({ type: RESTORE_PROFILE_ERROR, payload: 'Get profile error!' });
  }
}

const ProfileSaga = function* Profile() {
  yield takeEvery(RESTORE_PROFILE, restoreProfile);
};

export default ProfileSaga;
