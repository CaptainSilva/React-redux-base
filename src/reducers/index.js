import { combineReducers } from 'redux';
import WelcomeReducer from './WelcomeReducer';

export default combineReducers({
  libraries: WelcomeReducer
});
