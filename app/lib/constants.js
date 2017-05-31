/*
* --> Actions type
*
* 1. these are global actions type used by the application
* 2. there are imported twice.
      a) reducer.js
      b) action.js
*/
export { NavigationActions } from 'react-navigation';

export const GOTO_HOME_FROM_SIGNIN = 'auth/GOTO_HOME_FROM_SIGNIN';
export const GOTO_HOME_FROM_SIGNUP_VALIDATION = 'auth/GOTO_HOME_FROM_SIGNUP_VALIDATION';
export const GOTO_SIGNUP_VALIDATION = 'auth/GOTO_SIGNUP_VALIDATION';
export const RESET_PASSWORD = 'auth/RESET_PASSWORD';
export const SHOW_MODAL = 'auth/SHOW_MODAL';
export const HIDE_MODAL = 'auth/HIDE_MODAL';
export const CLOSE_FORGOT_PASSWORD_MODAL = 'auth/CLOSE_FORGOT_PASSWORD_MODAL';
