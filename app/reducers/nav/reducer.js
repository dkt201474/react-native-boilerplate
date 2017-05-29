import initialNavState from './initialState';
import DefaultNavigatorTab from '../../navigators/DefaultNavigatorTab';

// Actions
import {
  GOTO_HOME_FROM_SIGNIN,
  RESET_PASSWORD,
  GOTO_HOME_FROM_SIGNUP_VALIDATION,
  GOTO_SIGNUP_VALIDATION,
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
  case RESET_PASSWORD:
    console.log(action.payload);

    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignIn'}),
      state
    );

  default:
    return DefaultNavigatorTab.router.getStateForAction(action, state);
  }
};

export default nav;
