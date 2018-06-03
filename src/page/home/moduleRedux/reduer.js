import { Map } from 'immutable';
import * as actions from './action';

function homePage(state = {
  inviteSuccess: false, inviteError: '', data: ''
}, action) {
  switch (action.type) {
    case actions.SHOW_SUCCESS_MSG:
      return Map(state).set('inviteSuccess', true).toJS();
    case actions.HIDE_SUCCESS_MSG:
      return Map(state).set('inviteSuccess', false).toJS();
    case actions.SHOW_INVITE_ERROR:
      return Map(state).set('inviteError', action.payload).toJS();
    case actions.CLEAR_INVITE_ERROR:
      return Map(state).set('inviteError', '').toJS();
    case actions.INVITE_REQUEST_SUCCESS:
      return Map(state).set('data', action.payload).toJS();
    default:
      return state;
  }
}

export default homePage;
