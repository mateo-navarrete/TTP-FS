import { SET_AUTH_STATUS } from '../../constants';

const initState = { email: null };

export const authReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case SET_AUTH_STATUS:
      nextState = {
        ...state,
        email: action.payload.email,
      };
      return nextState;
    default:
      return state;
  }
};
