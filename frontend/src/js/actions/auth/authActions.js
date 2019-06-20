//jscs:disable requireShorthandArrowFunctions
//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import { SET_AUTH_STATUS } from '../../constants';
import { getData } from '../../utils';

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
