import React, { Fragment as F } from 'react';
import { PrivateViews } from './PrivateViews';
import { PublicViews } from './PublicViews';
import { withAuthStatus } from '../containers';

const WrappedComponent = ({ isAuthUser, ...props }) => {
  let isAuthenticated = isAuthUser ? true : false;
  const renderView = isAuthenticated ? (
    <PrivateViews {...props} />
  ) : (
    <PublicViews {...props} />
  );
  return <F>{renderView}</F>;
};

export const Views = withAuthStatus(WrappedComponent);
