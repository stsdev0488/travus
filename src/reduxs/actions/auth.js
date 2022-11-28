export const RESTORE_TOKEN = 'RESTORE_TOKEN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_ERROR = 'AUTH_REGISTER_ERROR';
export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

/* Restore token */
export const restoreToken = (payload) => ({
  type: RESTORE_TOKEN,
  payload,
});

/* Login */
export const loginSuccess = (payload) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload,
});

/* Logout */
export const logout = () => ({
  type: AUTH_LOGOUT,
});
