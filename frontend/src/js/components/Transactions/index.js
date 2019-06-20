//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { withTransactions } from '../../containers';

const WrappedComponent = props => {
  return <View {...props} />;
};

export const Transactions = withTransactions(WrappedComponent);
