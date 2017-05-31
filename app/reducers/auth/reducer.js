/* Initial State */
const initialState = {
  visibleModal: false,
};

/* Actions */
import {
  GOTO_HOME_FROM_SIGNIN,
  RESET_PASSWORD,
  GOTO_HOME_FROM_SIGNUP_VALIDATION,
  GOTO_SIGNUP_VALIDATION,
  SHOW_MODAL,
  HIDE_MODAL,
  CLOSE_FORGOT_PASSWORD_MODAL,
} from '../../lib/constants';

const nav = (state = initialState, action) => {
  switch (action.type) {
  case GOTO_HOME_FROM_SIGNIN:
    return state;

  case GOTO_SIGNUP_VALIDATION:
  case GOTO_HOME_FROM_SIGNUP_VALIDATION:
    return state;

  case RESET_PASSWORD:
    return {...state, visibleModal: true};

  case SHOW_MODAL:
    return {...state, visibleModal: true};

  case HIDE_MODAL:
    return {...state, visibleModal: false};

  case CLOSE_FORGOT_PASSWORD_MODAL:
    return {...state, visibleModal: false};

  default:
    return state;
  }
};

export default nav;
