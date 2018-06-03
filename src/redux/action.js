/**
 * ------------------------------------------------------------------
 * redux actions
 * ------------------------------------------------------------------
 */
export const SHOW_MODAL = Symbol('SHOW_MODAL');
export const showModal = () => ({
  type: SHOW_MODAL
});
export const HIDE_MODAL = Symbol('HIDE_MODAL');
export const hideModal = () => ({
  type: HIDE_MODAL
});
export const TOGGLE_LOADING = Symbol('TOGGLE_LOADING');
export const toggleLoading = () => ({
  type: TOGGLE_LOADING
});
export const INVITE_REQUEST = Symbol('TOGGLE_LOADING');
export const inviteRequest = payload => ({
  type: INVITE_REQUEST,
  payload
});
export const INVITE_REQUEST_SUCCESS = Symbol('INVITE_REQUEST_SUCCESS');
export const inviteRequestSuccess = payload => ({
  type: INVITE_REQUEST_SUCCESS,
  payload
});
export const SHOW_SUCCESS_MSG = Symbol('SHOW_SUCCESS_MSG');
export const showSuccessMsg = () => ({
  type: SHOW_SUCCESS_MSG
});
export const HIDE_SUCCESS_MSG = Symbol('HIDE_SUCCESS_MSG');
export const hideSuccessMsg = () => ({
  type: HIDE_SUCCESS_MSG
});
export const SHOW_INVITE_ERROR = Symbol('SHOW_INVITE_ERROR');
export const showInviteError = payload => ({
  type: SHOW_INVITE_ERROR,
  payload
});
export const CLEAR_INVITE_ERROR = Symbol('CLEAR_INVITE_ERROR');
export const clearInviteError = () => ({
  type: CLEAR_INVITE_ERROR
});
