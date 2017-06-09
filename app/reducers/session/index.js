import { combineReducers } from 'redux';

/*
* --> 1. Actions types
*
*   - constants needed by the reducer to handle actions dispatched
*/
import types from '../actionsType';

/*
* --> 2. User reducers
*
*   - Manages user basic info components
*/

/* Initial state */
const credentials = {
  email: '',
  password: '',
  phoneNumber: '',
};

/* Reducer */
const user = (state = credentials, action) => {
  switch (action.type) {

  // case types.ScreenName.ACTION:
  //   return {
  //     ...state,
  //     email: action.payload.email,
  //     password: action.payload.password,
  //     phoneNumber: action.payload.phoneNumber,
  //   };

  default:
    return state;
  }
};


/*
* --> Session Reducer
*
*   - Hold all server cached data related to the user
*   - Ex: transactions, userInfo...
*/
const session = combineReducers({ user, });

export default session;
