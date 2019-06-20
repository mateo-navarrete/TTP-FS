//jscs:disable requireShorthandArrowFunctions
//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import { SET_AUTH_STATUS } from '../../constants';
import { initBalance } from '../';
import { getData, postData } from '../../utils';

const setAuthStatus = authStatus => {
  return { type: SET_AUTH_STATUS, payload: authStatus };
};

export const getAuthStatus = () => dispatch => {
  getData('/api/users/isAuthenticated')
    .then(res => {
      res.status === 200
        ? dispatch(setAuthStatus(res.data))
        : console.log('TODO: handleErrCodes !200', res);
    })
    .catch(err => console.log('TODO: handleErrCodes', err));
};

export const registerUser = user => dispatch => {
  postData('/api/users/register', user)
    .then(res => {
      dispatch(initBalance(user));
    })
    .then(res => {
      dispatch(signinUser(user));
    });
};

export const signinUser = ({ email, password }) => dispatch => {
  postData('/api/users/signin', { email, password })
    .then(res => {
      res.status === 200
        ? dispatch(getAuthStatus())
        : console.log('TODO: handleErrCodes !200', res);

      //TODO code 500 = user not found
    })
    .catch(err => {
      console.log('TODO: handleErrCodes', err);
    });
};

export const signoutUser = () => dispatch => {
  postData('/api/users/signout', null)
    .then(() => dispatch(getAuthStatus()))
    .catch(err => console.log('TODO: handleErrCodes', err));
};
