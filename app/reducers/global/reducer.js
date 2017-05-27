import { combineReducers } from 'redux';
import { collapsible } from './initialState';

// Actions
import {
  TOGGLE_EXPANDED,
  SET_SECTION,
} from '../../lib/constants';

/*
* --> Reducer that manage the collapsible state
*/
const collapsibleReducer = (state = collapsible, action) => {
  switch (action.type) {
  case TOGGLE_EXPANDED:
    return {...state, collapsed: !state.collapsed}
  case SET_SECTION:
    return {...state, activeSection: action.payload}

  default:
    return state;
  }
};


/*
* --> The returned reducer is the sum of all global reducers of our app
*/
export default combineReducers({ collapsibleReducer });
