import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './LoginReducer';
import ModalReducer from './ModalReducer';
import UsernameReducer from './UsernameReducer';

export default combineReducers({
  login: LoginReducer,
  form: formReducer,
  modal: ModalReducer,
  user: UsernameReducer
});
