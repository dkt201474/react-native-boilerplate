import { combineReducers } from 'redux';

/**
* load all reducers
*/
import nav from './nav/reducer';
import auth from './auth/reducer';

/**
* rootReducer is a wrapper for all reducers
*/
const rootReducer = combineReducers({
  auth,
  nav,
});

export default rootReducer;
