import {
  TOGGLE_EXPANDED,
  SET_SECTION,
} from '../../lib/constants';

export const toggleExpanded = () => ({ type: TOGGLE_EXPANDED, });
export const setSection = (section) => ({
  type: SET_SECTION,
  payload: section,
});
