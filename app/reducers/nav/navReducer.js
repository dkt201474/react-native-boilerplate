import { NavigationActions } from 'react-navigation';

import SignInStack from '../../navigators/SignInStack';

const gotoSignIn = SignInStack.router.getActionForPathAndParams('SignIn');
const initialNavState = SignInStack.router.getStateForAction(gotoSignIn);

const nav = (state = initialNavState, action) => {
  switch (action.type) {
  case 'NewAccount':
    return SignInStack.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignUpForm'}),
      state
    );
  case 'ForgotPassword':
    return SignInStack.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignUpValidation'}),
      state
    );

  default:
    return SignInStack.router.getStateForAction(action, state);
  }
}

export default nav;
