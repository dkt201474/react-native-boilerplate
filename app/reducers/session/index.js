import { combineReducers } from 'redux';

/*
* --> 1. Actions types
*
*   - constants needed by the reducer to handle actions dispatched
*/
// import { actionsType } from '../actionsType';

/*
* --> 2. User reducers
*
*   - Manages user basic info components
*/

/* Initial state */
const initialState = {};

/* Reducer */
const user = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

/*
* --> Session Reducer (http://jamesknelson.com/5-types-react-application-state/)
*
*   - Hold all server cached data related to the user
*   - Ex: transactions, userInfo...
*/
const session = combineReducers({ user });

export default session;
