//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Landing } from './Landing';
import { Signin } from './Signin';
import { Register } from './Register';

export const PublicViews = () => {
  return (
    <F>
      <Switch>
        <Route path="/signin" render={props => <Signin {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route exact path="/" render={props => <Landing {...props} />} />
        <Redirect to="/" />
      </Switch>
    </F>
  );
};
