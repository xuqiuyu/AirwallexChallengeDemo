/**
 * ------------------------------------------------------------------
 * redux root reduer
 * ------------------------------------------------------------------
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Map } from 'immutable';
import * as actions from './action';

// require module reducers
import homePage from '../page/home/moduleRedux/reduer';

function common(state = {
  modalVisiability: false, loading: false
}, action) {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return Map(state).set('modalVisiability', true).toJS();
    case actions.HIDE_MODAL:
      return Map(state).set('modalVisiability', false).toJS();
    case actions.TOGGLE_LOADING:
      return Map(state).set('loading', !state.loading).toJS();
    default:
      return state;
  }
}

export default combineReducers({
  common,
  homePage,
  form: formReducer
});
