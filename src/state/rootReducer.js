// External
import { combineReducers } from 'redux';

// Internal
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  // modals
  authReducer,

});

export default rootReducer;