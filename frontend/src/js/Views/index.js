import React, { Fragment as F } from 'react';
import { withAuthStatus } from '../containers';

const WrappedComponent = ({ email, ...props }) => {
  let isAuthenticated = email ? true : false;
  const renderView = isAuthenticated
    ? 'render Private View'
    : 'render Public View';
  return <F>{renderView}</F>;
};

export const Views = withAuthStatus(WrappedComponent);
