export const GET_PROFILE = 'GET_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';
export const RESTORE_PROFILE = 'RESTORE_PROFILE';
export const RESTORE_PROFILE_REQUEST = 'RESTORE_PROFILE_REQUEST';
export const RESTORE_PROFILE_SUCCESS = 'RESTORE_PROFILE_SUCCESS';
export const RESTORE_PROFILE_ERROR = 'RESTORE_PROFILE_ERROR';

export const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload,
});

export const restoreProfile = () => ({
  type: RESTORE_PROFILE,
});
