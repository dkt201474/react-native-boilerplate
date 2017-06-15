/*
    - Store : hold the complete state of the app as an immutable data structure
    - Here we can add middleware and other stuffs usefull before creating the store
*/
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

/* App imports */
import rootReducer from './index';

/* The rootReducer reducer is now a wrapped redux component */

/* the store is now immutable */
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
