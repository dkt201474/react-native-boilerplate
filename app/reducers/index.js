import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

/* load all reducers */
import ux from './ux';
import nav from './nav';
import session from './session';

/*
* --> rootReducer
*
*   - the reducer that will be created with the store
*   - Contain all state of the whole application
*   - state shape will be:
*       {
*         ux: {...},
*         nav: {...},
*         form: {...},
*         ...
*       }
*/
const rootReducer = combineReducers({
  ux,
  nav,
  form,
  session
});

export default rootReducer;
