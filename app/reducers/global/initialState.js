import DefaultNavigatorTab from '../../navigators/DefaultNavigatorTab';

const gotoSignInStack = DefaultNavigatorTab.router.getActionForPathAndParams('SignInStack');

export default DefaultNavigatorTab.router.getStateForAction(gotoSignInStack);
