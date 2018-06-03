/**
 * ------------------------------------------------------------------
 * redux root saga
 * ------------------------------------------------------------------
 */
import { fork } from 'redux-saga/effects';

// require module sagas
import homePageSaga from '../page/home/moduleRedux/saga';


export default function* () {
  yield [
    fork(homePageSaga)
  ];
}
