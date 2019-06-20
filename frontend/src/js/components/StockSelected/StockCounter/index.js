//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { withStockPrice } from '../../../containers';
import { Form } from './Form';

const WrappedComponent = props => {
  return (
    <F>
      <Form {...props} />
    </F>
  );
};

export const StockCounter = withStockPrice(WrappedComponent);
