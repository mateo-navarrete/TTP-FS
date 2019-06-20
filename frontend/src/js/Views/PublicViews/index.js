//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, Landing, Register, Signin } from '../../components';

export const PublicViews = () => {
  return (
    <F>
      <Header />
      <Switch>
        <Route path="/register" render={props => <Register {...props} />} />
        <Route path="/signin" render={props => <Signin {...props} />} />
        <Route exact path="/" render={props => <Landing {...props} />} />
        <Redirect to="/" />
      </Switch>
    </F>
  );
};
