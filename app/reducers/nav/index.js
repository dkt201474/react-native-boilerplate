import Root from '../../navigators/Root';

/*
* --> 1. Initial State
*   - Retrieve gotoSignIn action
*   - Retrieve app current state if that action is applied
*/
const initalAction = Root.router.getActionForPathAndParams('SignIn');

// const initalAction = Root.router.getActionForPathAndParams('HomeTab');
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
    // case types.SignIn.LOGIN_SUCCEEDED:
    //   return Root.router.getStateForAction(
    //     types.NavigationActions.navigate({ routeName: 'Home'}),
    //     state
    //   );

  default:
    return Root.router.getStateForAction(action, state);
  }
};

export default nav;
