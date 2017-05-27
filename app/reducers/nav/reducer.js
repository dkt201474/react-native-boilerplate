import initialNavState from './initialState';
import DefaultNavigatorTab from '../../navigators/DefaultNavigatorTab';

// Actions
import {
  GOTO_NEW_ACCOUNT,
  GOTO_FORGOT_PASSWORD,
  GOTO_HOME,
  NavigationActions,
} from '../../lib/constants';

const nav = (state = initialNavState, action) => {
  switch (action.type) {
  case GOTO_NEW_ACCOUNT:
    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignUpForm'}),
      state
    );
  case GOTO_FORGOT_PASSWORD:
    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignUpValidation'}),
      state
    );
  case GOTO_HOME:
    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'Services'}),
      state
    );

  default:
    return DefaultNavigatorTab.router.getStateForAction(action, state);
  }
};

export default nav;
