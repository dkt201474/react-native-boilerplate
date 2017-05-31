import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

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
  form: formReducer,
});

export default rootReducer;
