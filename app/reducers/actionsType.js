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
  CLOSE_MODAL: 'ep/ux/CLOSE_MODAL',

  /* Default page */
  OPEN_ABOUT: 'ep/ux/DefaultPage/OPEN_ABOUT',
  OPEN_FARES: 'ep/ux/DefaultPage/OPEN_FARES',
  OPEN_HELP: 'ep/ux/DefaultPage/OPEN_HELP',
  OPEN_USER_CONTRACT: 'ep/ux/DefaultPage/OPEN_USER_CONTRACT',
  OPEN_PRIVATE_POLICY: 'ep/ux/DefaultPage/OPEN_PRIVATE_POLICY'
};

export default {
  ux,
  NavigationActions
};
