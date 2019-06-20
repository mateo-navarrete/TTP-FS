//jscs:disable requireShorthandArrowFunctions
//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import { SET_INIT_BALANCE } from '../../constants';
import { postData } from '../../utils';

const setInitBalance = data => {
  return { type: SET_INIT_BALANCE };
};

export const initBalance = ({ email }) => dispatch => {
  postData('/api/balances', { email })
    .then(res => {
      dispatch(setInitBalance());
    })
    .catch(err => console.log('TODO: handleErrCodes', err));
};
