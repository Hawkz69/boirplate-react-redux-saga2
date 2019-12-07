// Internal
import * as types from './constants';

export const initialState = {
  isOpenModal: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        msg: action.payload.msg,
      };
    default:
      return state;
  }
};

export default authReducer;
