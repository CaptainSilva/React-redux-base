import firebase from 'firebase';
import {
  EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL
} from './types';

export const emailChanged = (text) =>{
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) =>{
   return {
     type: PASSWORD_CHANGED,
     payload: text
   }
}

export const login = ({ email, password }) => {
    return (dispatch) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginSuccess(dispatch, user))
          .catch(() => loginFail(dispatch));
        });
      };
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
};

const loginFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL });
}
