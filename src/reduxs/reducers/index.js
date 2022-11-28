import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';

const appReducer = combineReducers({
  auth,
  profile,
});

export default appReducer;
