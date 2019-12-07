import * as types from './constants';

export const signin = data => ({
  type: types.SIGNIN_USER,
  payload: {
    data,
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: true
  }
});

export const signinSuccess = (data) => ({
  type: types.SIGNIN_USER_SUCCESS,
  payload: {
    message: {
      show: false,
      type: '',
      msg: '',
    },
    isLoading: false
  },
});