import { USERNAME } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case USERNAME:
      return action.payload;
    default:
      return state;
  }
};
