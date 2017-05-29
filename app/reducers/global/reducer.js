import { combineReducers } from 'redux';
import { modal, } from './initialState';

// Actions
import {
  TOGGLE_MODAL,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../../lib/constants';

/*
* --> Reducer that manage the modal state
*/
const modalReducer = (state = modal, action) => {
  switch (action.type) {
  case TOGGLE_MODAL:
    return { ...state, isOpen: !state.isOpen, }
  case OPEN_MODAL:
    return { ...state, isOpen: true, }
  case CLOSE_MODAL:
    return { ...state, isOpen: false, }

  default:
    return state;
  }
};


/*
* --> The returned reducer is the sum of all global reducers of our app
*/
export default combineReducers({ modalReducer });
