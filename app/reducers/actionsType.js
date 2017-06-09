/*
* --> Action Type
*
*   - Contain all actions types of the whole application
*   - Actions type organised by screen
*   - to access a particular action: Ex. SignUp.RESET_PASSWORD
*/

import { NavigationActions } from 'react-navigation';

export const ux = {
  OPEN_MODAL: 'ep/ux/OPEN_MODAL',
  OPEN_ABOUT: 'ep/ux/OPEN_ABOUT',
  CLOSE_MODAL: 'ep/ux/CLOSE_MODAL'
};

export default {
  ux,
  NavigationActions
};
