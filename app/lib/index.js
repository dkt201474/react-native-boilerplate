export const createAction = (type) => (payload) => ({ type, payload });

export const getCurrentScreen = (nav) => {
  if (!nav) {
    return null;
  }
  const route = nav.routes[nav.index];

  if (route.routes) {
    return getCurrentScreen(route);
  }

  return route.routeName;
};

export const backHandle = (nav, dispatch, NavigationActions) => {
  const currentScreen = getCurrentScreen(nav);

  switch (currentScreen) {
  case 'SignUp':
  case 'ResetPassword':
    dispatch(NavigationActions.back());

    return true;

  case 'Help':
    dispatch(NavigationActions.back());
    dispatch(NavigationActions.navigate({ routeName: 'DefaultMenu' }));

    return true;

  default:
    return true;
  }
};
