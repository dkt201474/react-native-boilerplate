import {
  TOGGLE_MODAL,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../../lib/constants';

export const toggleModal = () => ({ type: TOGGLE_MODAL, });
export const openModal = () => ({ type: OPEN_MODAL, });
export const closeModal = () => ({ type: CLOSE_MODAL, });
