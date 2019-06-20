import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { balancesReducer } from './balancesReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  balance: balancesReducer,
});
