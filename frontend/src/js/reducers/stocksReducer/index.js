import {
  HANDLE_STOCK_DATA,
  SET_AUTOCOMPLETE_STOCKS,
  SET_STOCK_PRICE
} from '../../constants';

const initState = {
  stockData: {},
  prevStockData: {},
  stockPrice: '',
  stocksList: [],
};

export const stocksReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case HANDLE_STOCK_DATA:
      const { payload } = action;
      nextState = {
        ...state,
        prevStockData: state.stockData,
        stockData: { ...state.stockData, [payload.symbol]: payload },
      };
      return nextState;
    case SET_AUTOCOMPLETE_STOCKS:
      nextState = {
        ...state,
        stocksList: action.payload || [],
      };
      return nextState;
    case SET_STOCK_PRICE:
      nextState = {
        ...state,
        stockPrice: action.payload,
      };
      return nextState;
    default:
      return state;
  }
};
