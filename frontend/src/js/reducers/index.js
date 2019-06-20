import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { stocksReducer } from './stocksReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  stocks: stocksReducer,
  user: userReducer,
});
