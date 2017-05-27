import {
  GOTO_NEW_ACCOUNT,
  GOTO_FORGOT_PASSWORD,
  GOTO_HOME,
} from '../../lib/constants';

export const gotoNewAccount = (data) => ({
  type: GOTO_NEW_ACCOUNT,
  payload: data,
});
export const gotoForgotPassword = (data) => ({
  type: GOTO_FORGOT_PASSWORD,
  payload: data,
});
export const gotoHome = (data) => ({
  type: GOTO_HOME,
  payload: data,
});
