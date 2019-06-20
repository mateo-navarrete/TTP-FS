//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { withStockPrice } from '../../../containers';

const WrappedComponent = ({ stockPrice, ...props }) => {
  return (
    <F>
      <div>${stockPrice}</div>
    </F>
  );
};

export const StockSymbolPrice = withStockPrice(WrappedComponent);
