import {
  GOTO_HOME_FROM_SIGNIN,
  GOTO_HOME_FROM_SIGNUP_VALIDATION,
  GOTO_SIGNUP_VALIDATION,
  RESET_PASSWORD,
} from '../../lib/constants';

export const gotoHomeFromSignIn = (data) => ({
  type: GOTO_HOME_FROM_SIGNIN,
  payload: data,
});

export const gotoHomeFromSignUpValidation = (data) => ({
  type: GOTO_HOME_FROM_SIGNUP_VALIDATION,
  payload: data,
});

export const gotoSignUpValidation = (data) => ({
  type: GOTO_SIGNUP_VALIDATION,
  payload: data,
});

export const resetPassword = (data) => ({
  type: RESET_PASSWORD,
  payload: data,
});
