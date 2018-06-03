/**
 * ------------------------------------------------------------------
 * redux root saga
 * ------------------------------------------------------------------
 */
import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from './action';
import * as commonActions from '../../../redux/action';
import { postInviteRequest } from './service';

function* inviteRequest(action) {
  try {
    const data = yield call(postInviteRequest, action.payload);
    yield put(commonActions.toggleLoading());
    if (data.errorMessage) {
      yield put(actions.showInviteError(data.errorMessage));
    } else {
      yield put(actions.inviteRequestSuccess(data));
      yield put(actions.showSuccessMsg());
    }
  } catch (error) {
    console.log(error);
  }
}


export default function* () {
  yield [
    takeLatest(actions.INVITE_REQUEST, inviteRequest)
  ];
}
