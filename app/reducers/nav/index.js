import { fromJS } from 'immutable';

import Root from '../../navigators/Root';
import { NavigationActions } from 'react-navigation';

/*
* --> 1. Initial State
*   - Retrieve the action object needed to go to home screen
*   - Retrieve app current state after that action has been applied
*/
const initalAction = Root.router.getActionForPathAndParams('Home');
// const initialState = Root.router.getStateForAction(initalAction);
const initialState = fromJS(Root.router.getStateForAction(initalAction)).toJS();

/*
* --> 3. Nav Reducer
*
*   - Function that manages all navigation state.
*   - Think of it like a router microservice
*   - Receives action and navigate to a particular screen based on that action
*/
const nav = (state = initialState, action) => {
  switch (action.type) {
  case 'GOTO_FOO':
    return Root.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Foo' }),
        state
      );

  case 'GOTO_HOME':
    return Root.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );

  default:
    return Root.router.getStateForAction(action, state);
  }
};

export default nav;
