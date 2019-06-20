import React, { Fragment as F } from 'react';
import { StockCounter } from './StockCounter';
import { StockSymbolPrice } from './StockSymbolPrice';

export const StockSelected = ({ stock, ...props }) => {
  const stockName = stock ? stock.name : '';
  const stockSymbol = stock ? stock.symbol : '';
  const renderSymbol = stock ? <StockSymbolPrice symbol={stockSymbol} /> : '';
  const renderCount = stock ? <StockCounter symbol={stockSymbol} /> : '';
  return (
    <F>
      <div>{stockName}</div>
      <div>Stock Price</div>
      <div>{renderSymbol}</div>
      <div>{renderCount}</div>
    </F>
  );
};
