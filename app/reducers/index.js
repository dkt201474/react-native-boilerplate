import { combineReducers } from 'redux';

/**
* load all reducers
*/
import nav from './nav/reducer';
import global from './global/reducer';

/**
* rootReducer is a wrapper for all reducers
*/
const rootReducer = combineReducers({
  nav,
  global,
});

export default rootReducer;
