/*
* --> Action creator
*
*   - Action are plain object. Ex: {type: 'ACTION_TYPE', [payload: any]}
*   - Contain all actions of the whole application
*   - Actions organised by behaviour
*   - Action creator can be impure and have side effect
*/

import { ux as uxAction } from './actionsType';

export const ux = {
  openModal: () => ({ type: uxAction.OPEN_MODAL }),
  openAbout: (data) => ({ type: uxAction.OPEN_ABOUT, payload: data }),
  closeModal: () => ({ type: uxAction.CLOSE_MODAL })
};
