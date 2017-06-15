import Root from '../../navigators/Root';

/*
* --> 1. Initial State
*   - Retrieve the action object needed to go to home screen
*   - Retrieve app current state after that action has been applied
*/
const initalAction = Root.router.getActionForPathAndParams('Home');

const initialState = Root.router.getStateForAction(initalAction);

/*
* --> 2. Actions types
*
*   - constants needed by the reEmailducer to handle actions dispatched
*/
// import types from '../actionsType';

/*
* --> 3. Nav Reducer
*
*   - Function that manages all navigation state.
*   - Think of it like a router microservice
*   - Receives action and navigate to a particular screen based on that action
*/
const nav = (state = initialState, action) => {
  switch (action.type) {
    // case types.Screen.MY_ACTION:
    //   return Root.router.getStateForAction(
    //     types.NavigationActions.navigate({ routeName: 'Home'}),
    //     state
    //   );

  default:
    return Root.router.getStateForAction(action, state);
  }
};

export default nav;
