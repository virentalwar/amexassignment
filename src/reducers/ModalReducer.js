import { MODAL_HIDE, MODAL_SHOW } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case MODAL_HIDE:
      return false;
    case MODAL_SHOW:
      return true;
    default:
      return state;
  }
};
