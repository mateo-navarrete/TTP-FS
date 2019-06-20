//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { CssBaseline } from './utils';
import { Views } from './Views';

export const App = () => {
  return (
    <F>
      <CssBaseline />
      <Views />
    </F>
  );
};
