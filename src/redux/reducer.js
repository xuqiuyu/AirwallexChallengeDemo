import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Map, fromJS } from 'immutable';
import * as actions from './action';

function common(state = {
  modalVisiability: false, loading: false, inviteSuccess: false, inviteError: ''
}, action) {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return Map(state).set('modalVisiability', true).toJS();
    case actions.HIDE_MODAL:
      return Map(state).set('modalVisiability', false).toJS();
    case actions.TOGGLE_LOADING:
      return Map(state).set('loading', !state.loading).toJS();
    case actions.SHOW_SUCCESS_MSG:
      return Map(state).set('inviteSuccess', true).toJS();
    case actions.HIDE_SUCCESS_MSG:
      return Map(state).set('inviteSuccess', false).toJS();
    case actions.SHOW_INVITE_ERROR:
      return Map(state).set('inviteError', action.payload).toJS();
    case actions.CLEAR_INVITE_ERROR:
      return Map(state).set('inviteError', '').toJS();
    default:
      return state;
  }
}

function data(state = { inviteRequest: {} }, action) {
  switch (action.type) {
    case actions.INVITE_REQUEST_SUCCESS:
      return fromJS(state).set('inviteRequest', action.payload).toJS();
    default:
      return state;
  }
}
export default combineReducers({
  common,
  data,
  form: formReducer
});
