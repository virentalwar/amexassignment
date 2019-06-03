import { VALIDATE_USER, SIGN_OUT } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case VALIDATE_USER:
      return action.payload;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
};
