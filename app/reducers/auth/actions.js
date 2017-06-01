import { createAction } from '../../lib';
import {
  GOTO_HOME_FROM_SIGNIN,
  GOTO_HOME_FROM_SIGNUP_VALIDATION,
  GOTO_SIGNUP_VALIDATION,
  RESET_PASSWORD,
  SHOW_MODAL,
  HIDE_MODAL,
  CLOSE_FORGOT_PASSWORD_MODAL,
} from '../../lib/constants';

export const closeForgotPasswordModal = () => createAction(CLOSE_FORGOT_PASSWORD_MODAL)();
export const resetPassword = (data) => createAction(RESET_PASSWORD)(data);
export const gotoSignUpValidation = (data) => createAction(GOTO_SIGNUP_VALIDATION)(data);
export const gotoHomeFromSignIn = (data) => createAction(GOTO_HOME_FROM_SIGNIN)(data);

export const gotoHomeFromSignUpValidation = (data) => createAction(GOTO_HOME_FROM_SIGNUP_VALIDATION)(data);
export const showModal = () => createAction(SHOW_MODAL)();
export const hideModal = () => createAction(HIDE_MODAL)();
