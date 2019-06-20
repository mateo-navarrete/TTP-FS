import { SET_INIT_BALANCE } from '../../constants';

const initState = { errMsg: '' };

export const balancesReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
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
