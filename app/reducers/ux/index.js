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
const initialState = { visibleModal: false };

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

  default:
    return state;
  }
};

export default ux;
