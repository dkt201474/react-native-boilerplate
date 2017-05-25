import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../navigators/SignInStack';

const gotoSignIn = AppNavigator.router.getActionForPathAndParams('SignIn');
const initialNavState = AppNavigator.router.getStateForAction(gotoSignIn);

const nav = (state = initialNavState, action) => {
  switch (action.type) {
  case 'NewAccount':
    return AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignUpForm'}),
      state
    );
  case 'ForgotPassword':
    return AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignUpValidation'}),
      state
    );

  default:
    return AppNavigator.router.getStateForAction(action, state);
  }
}

export default nav;
