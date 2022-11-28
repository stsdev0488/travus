import { all } from 'redux-saga/effects';
import AuthSaga from './auth';
import ProfileSaga from './profile';

export default function* mainSaga() {
  yield all([ProfileSaga()]);
}
