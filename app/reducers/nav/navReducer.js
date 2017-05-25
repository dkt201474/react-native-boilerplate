import { NavigationActions } from 'react-navigation';

import DefaultNavigatorTab from '../../navigators/DefaultNavigatorTab';

const gotoSignInStack = DefaultNavigatorTab.router.getActionForPathAndParams('SignInStack');
const initialNavState = DefaultNavigatorTab.router.getStateForAction(gotoSignInStack);

const nav = (state = initialNavState, action) => {
  switch (action.type) {
  case 'NewAccount':
    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignUpForm'}),
      state
    );
  case 'ForgotPassword':
    return DefaultNavigatorTab.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'SignUpValidation'}),
      state
    );

  default:
    return DefaultNavigatorTab.router.getStateForAction(action, state);
  }
}

export default nav;
