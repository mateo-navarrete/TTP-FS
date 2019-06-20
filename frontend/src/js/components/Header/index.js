//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { PrivateLinks } from '../PrivateLinks';
import { PublicLinks } from '../PublicLinks';

export const Header = ({ isPrivate, ...props }) => {
  const renderMenu = isPrivate ? <PrivateLinks /> : <PublicLinks />;
  return <View {...props}>{renderMenu}</View>;
};
