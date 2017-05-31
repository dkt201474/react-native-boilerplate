import DefaultNavigatorTab from '../../navigators/DefaultNavigatorTab';

/*
* -->Initial State
*
* 1. retrieve the action needed to go to login screen
* 2. trigger the reducer with that action ==> retrieve the state return by dispatching 1.
*/
const gotoSignInStack = DefaultNavigatorTab.router.getActionForPathAndParams('SignInStack');
const initialNavState = DefaultNavigatorTab.router.getStateForAction(gotoSignInStack);

/* Actions */
import {
  GOTO_HOME_FROM_SIGNIN,
  GOTO_HOME_FROM_SIGNUP_VALIDATION,
  GOTO_SIGNUP_VALIDATION,
  CLOSE_FORGOT_PASSWORD_MODAL,
  NavigationActions,
} from '../../lib/constants';

const nav = (state = initialNavState, action) => {
  switch (action.type) {
  case GOTO_HOME_FROM_SIGNIN:
    console.log(action.payload);

    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignIn'}),
      state
    );
  case GOTO_SIGNUP_VALIDATION:
    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignIn'}),
      state
    );
  case GOTO_HOME_FROM_SIGNUP_VALIDATION:
    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignIn'}),
      state
    );
  case CLOSE_FORGOT_PASSWORD_MODAL:
    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignIn'}),
      state
    );

  default:
    return DefaultNavigatorTab.router.getStateForAction(action, state);
  }
};

export default nav;
