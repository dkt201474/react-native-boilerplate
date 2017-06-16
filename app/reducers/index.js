import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';

/* load all reducers */
import nav from './nav';

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
const rootReducer = combineReducers({ nav });

export default rootReducer;
