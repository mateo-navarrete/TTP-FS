//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { AppBar, Toolbar } from '../material';
import { withStyles } from '../../containers';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const WrappedComponent = ({ children, classes, ...props }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </div>
  );
};

export const View = withStyles(styles)(WrappedComponent);
