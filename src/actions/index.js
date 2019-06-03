import login from '../api/login';
import {
  VALIDATE_USER,
  SIGN_OUT,
  MODAL_HIDE,
  MODAL_SHOW,
  USERNAME
} from './types';

export const validateUser = formValues => async dispatch => {
  const response = await login.post('/login', { ...formValues });

  dispatch({ type: VALIDATE_USER, payload: response.data });
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const modalHide = () => {
  return {
    type: MODAL_HIDE
  };
};

export const modalShow = () => {
  return {
    type: MODAL_SHOW
  };
};

export const username = name => {
  return {
    type: USERNAME,
    payload: name
  };
};
