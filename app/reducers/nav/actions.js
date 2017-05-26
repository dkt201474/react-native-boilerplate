import {
  GOTO_NEW_ACCOUNT,
  GOTO_FORGOT_PASSWORD,
} from '../../lib/constants';

export const gotoNewAccount = (data) => ({
  type: GOTO_NEW_ACCOUNT,
  payload: data,
});
export const gotoForgotPassword = (data) => ({
  type: GOTO_FORGOT_PASSWORD,
  payload: data,
});
