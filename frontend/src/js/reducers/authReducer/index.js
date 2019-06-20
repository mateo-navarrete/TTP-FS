import { SET_AUTH_STATUS } from '../../constants';

const initState = { isAuthUser: null };

export const authReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case SET_AUTH_STATUS:
      nextState = {
        ...state,
        isAuthUser: action.payload.email,
      };
      return nextState;
    default:
      return state;
  }
};
