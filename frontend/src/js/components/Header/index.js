//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { PublicLinks } from '../PublicLinks';

export const Header = ({ isPrivate, ...props }) => {
  const renderMenu = isPrivate ? 'Private Links' : <PublicLinks />;
  return <View {...props}>{renderMenu}</View>;
};
