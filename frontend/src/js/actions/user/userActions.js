//jscs:disable requireShorthandArrowFunctions
//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import {
  GOT_PORTFOLIO,
  GOT_TRANSACTIONS,
  SET_INIT_BALANCE
} from '../../constants';
import { getData, postData, patchData } from '../../utils';

const gotPortfolio = data => {
  return { type: GOT_PORTFOLIO, payload: data };
};

const gotTransactions = data => {
  return { type: GOT_TRANSACTIONS, payload: data };
};

const setInitBalance = data => {
  return { type: SET_INIT_BALANCE };
};

export const getPortfolio = email => dispatch => {
  getData('/api/users/' + email)
    .then(res => {
      let data = res.data.data[0];
      if (!data.portfolio) data.portfolio = [];
      res.status === 200
        ? dispatch(gotPortfolio(data))
        : console.log('TODO: ErrCodes !200', res);
    })
    .catch(err => console.log('TODO: ErrCodes', err));
};

export const getTransactions = email => dispatch => {
  getData('/api/transactions/' + email)
    .then(res => {
      let data = res.data.data;
      if (!data[0].date) data = [];
      res.status === 200
        ? dispatch(gotTransactions(data))
        : console.log('TODO: handleErrCodes !200', res);
    })
    .catch(err => console.log('TODO: handleErrCodes', err));
};

export const handleTransaction = transaction => dispatch => {
  //TODO => reducer => disabling => Form.Button
  //TODO => update balance!
  //TODO => reducer => !disabling => Form.Button
  postData('/api/transactions', transaction)
    .then(res => {
      if (res.status === 200) {
        dispatch(updateBalance(transaction));
      } else {
        console.log('TODO: handleErrCodes !200', res);
      }
    })
    .catch(err => console.log('TODO: handleErrCodes', err));
};

export const initBalance = email => dispatch => {
  postData('/api/balances', email)
    .then(res => {
      dispatch(setInitBalance());
    })
    .catch(err => console.log('TODO: handleErrCodes', err));
};

const updateBalance = transaction => dispatch => {
  patchData('/api/balances', transaction)
    .then(res => {
      if (res.status === 200) {
        dispatch(getPortfolio(transaction.email));
        dispatch(getTransactions(transaction.email));
      } else {
        console.log('TODO: handleErrCodes !200', res);
      }
    })
    .catch(err => console.log('TODO: handleErrCodes', err));
};
