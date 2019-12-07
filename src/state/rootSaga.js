// External
import { all, fork } from 'redux-saga/effects';

// Internal
import authSagas from './auth/sagas';

export default function* rootSaga() {
  yield all(
    [
      fork(authSagas),
    ],
  );
}
