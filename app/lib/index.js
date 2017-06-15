/*
    - Utilities function helpers
*/

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

/*
    - the function that will be call if the back android button is pressed
    - action organised by screen name
*/
export const backHandle = (nav, dispatch, NavigationActions) => {
  const currentScreen = getCurrentScreen(nav);

  switch (currentScreen) {
  case 'Home':
    dispatch(NavigationActions.back());

    return true;

  default:
    return true;
  }
};
