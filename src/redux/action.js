/**
 * ------------------------------------------------------------------
 * redux common actions
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

