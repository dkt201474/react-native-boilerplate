import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

/* App imports */
import rootReducer from './index';

/*
    - Store : hold the complete state of the app as an immutable data structure
    - Here we can add middleware and other stuffs usefull before creating the store
*/
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
