import { createAction } from '../../lib';
import {
  GOTO_HOME_FROM_SIGNIN,
  GOTO_HOME_FROM_SIGNUP_VALIDATION,
  GOTO_SIGNUP_VALIDATION,
  RESET_PASSWORD,
} from '../../lib/constants';

export const gotoHomeFromSignIn = (data) => createAction(GOTO_HOME_FROM_SIGNIN)(data);
export const gotoHomeFromSignUpValidation = (data) => createAction(GOTO_HOME_FROM_SIGNUP_VALIDATION)(data);
export const gotoSignUpValidation = (data) => createAction(GOTO_SIGNUP_VALIDATION)(data);
export const resetPassword = (data) => createAction(RESET_PASSWORD)(data);
