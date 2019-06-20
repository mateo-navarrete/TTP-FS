//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { withPortfolio, withSocket } from '../../containers';

const WrappedComponent = props => {
  return <View {...props} />;
};

export const Portfolio = withPortfolio(withSocket(WrappedComponent));
