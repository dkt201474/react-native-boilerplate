/*
* --> 1. Actions types
*
*   - constants needed by the reducer to handle actions dispatched
*/
import { ux as uxType } from '../actionsType';

/*
* --> UX Reducer: Communicational Reducer
*
*   - manage all interaction config
*   - Ex: show spiner, opening modal,
*/

/* Initial state */
const initialState = { visibleModal: '' };

/* Reducer */
const ux = (state = initialState, action) => {
  switch (action.type) {
  case uxType.CLOSE_MODAL:
    return {
      ...state,
      visibleModal: false
    };

  case uxType.OPEN_MODAL:
    return {
      ...state,
      visibleModal: true
    };

  case uxType.OPEN_ABOUT:
    return {
      ...state,
      visibleModal: 'about'
    };

  case uxType.OPEN_HELP:
    return {
      ...state,
      visibleModal: 'help'
    };

  case uxType.OPEN_FARES:
    return {
      ...state,
      visibleModal: 'fares'
    };

  case uxType.OPEN_USER_CONTRACT:
    return {
      ...state,
      visibleModal: 'userContract'
    };

  case uxType.OPEN_PRIVATE_POLICY:
    return {
      ...state,
      visibleModal: 'privatePolicy'
    };

  default:
    return state;
  }
};

export default ux;
