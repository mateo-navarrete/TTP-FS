//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, Transactions, Portfolio } from '../../components';

export const PrivateViews = () => {
  return (
    <F>
      <Header isPrivate />
      <Switch>
        <Route
          path="/transactions"
          render={props => <Transactions {...props} />}
        />
        <Route path="/portfolio" render={props => <Portfolio {...props} />} />
        <Redirect to="/portfolio" />
      </Switch>
    </F>
  );
};
