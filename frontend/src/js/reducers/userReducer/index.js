//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import {
  GOT_PORTFOLIO,
  GOT_TRANSACTIONS,
  SET_INIT_BALANCE
} from '../../constants';
import { getSymbolStr } from '../../utils';

const initState = {
  errMsg: '',
  user_id: 0,
  user_name: '',
  total: 0,
  portfolio: [],
  iexsymbols: '',
  transactions: [],
};

export const userReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GOT_PORTFOLIO:
      const { user_id, user_name, total, portfolio } = action.payload;
      let str = getSymbolStr(portfolio);
      nextState = {
        ...state,
        user_id: user_id,
        user_name: user_name,
        total: total,
        portfolio: portfolio,
        iexsymbols: str,
      };
      return nextState;
    case GOT_TRANSACTIONS:
      nextState = {
        ...state,
        transactions: action.payload,
      };
      return nextState;
    case SET_INIT_BALANCE:
      nextState = {
        ...state,
        errMsg: '',
      };
      return nextState;
    default:
      return state;
  }
};
