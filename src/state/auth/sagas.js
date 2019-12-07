import { put, takeLatest, all, call, select, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { signinSuccess } from './actions';

import * as types from './constants';

export function* workerSignin() {
 console.log("chamou worker");
}

export default function* authSagas() {
  yield all([
    yield takeLatest(types.SIGNIN_USER, workerSignin),
  ]);
}