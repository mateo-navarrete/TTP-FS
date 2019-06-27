//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { View } from './View';

export const StockDetails = props => {
  return (
    <F>
      <View {...props} />
    </F>
  );
};
