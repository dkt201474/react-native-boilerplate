import { combineReducers } from 'redux';

/**
* load all reducers
*/
import nav from './nav/navReducer';

/**
* rootReducer is a wrapper for all reducers
*/
const rootReducer = combineReducers({ nav, });

export default rootReducer;
