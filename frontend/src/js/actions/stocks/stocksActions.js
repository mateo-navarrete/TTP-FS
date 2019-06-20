//jscs:disable maximumLineLength
//jscs:disable requireShorthandArrowFunctions
//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import {
  HANDLE_STOCK_DATA,
  PUBLIC_TOKEN,
  SET_AUTOCOMPLETE_STOCKS,
  SET_STOCK_PRICE
} from '../../constants';
import { getData } from '../../utils';

export const handleStockData = stockData => {
  return { type: HANDLE_STOCK_DATA, payload: stockData };
};

const setAutocompleteStocks = stocks => {
  return { type: SET_AUTOCOMPLETE_STOCKS, payload: stocks };
};

const setStockPrice = stock => {
  return { type: SET_STOCK_PRICE, payload: stock };
};

export const getAutocompleteStocks = () => dispatch => {
  getData(
    `https://cloud.iexapis.com/stable/ref-data/symbols?token=${PUBLIC_TOKEN}`
  )
    .then(res => {
      let data = res.data;
      let mapped = data.map(stock => ({
        name: stock.name,
        symbol: stock.symbol,
        label: stock.symbol,
      }));
      res.status === 200
        ? dispatch(setAutocompleteStocks(mapped))
        : console.log('TODO: handleErrCodes !200', res);
    })
    .catch(err => console.log('TODO: handleErrCodes', err));
};

export const getStockPrice = stock => dispatch => {
  getData(
    `https://cloud.iexapis.com/stable/stock/${stock}/price?token=${PUBLIC_TOKEN}`
  )
    .then(res => {
      let data = res.data;
      res.status === 200
        ? dispatch(setStockPrice(data))
        : console.log('TODO: handleErrCodes !200', res);
    })
    .catch(err => console.log('TODO: handleErrCodes', err));
};
