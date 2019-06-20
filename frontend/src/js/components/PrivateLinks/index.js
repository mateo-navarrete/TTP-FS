import React, { Fragment as F } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SignoutLink } from '../SignoutLink';
import { withStyles } from '../../containers';

const styles = {
  grow: {
    flexGrow: 4,
  },
  right: {
    display: 'flex',
    flexGrow: 1,
  },
  margin: {
    margin: '5px',
  },
};

const WrappedComponent = ({ classes, ...props }) => {
  let url = props.location.pathname;
  return (
    <F>
      <div className={classes.grow}>
        <SignoutLink {...props} />
      </div>
      <div className={classes.right}>
        {url !== '/transactions' ? (
          <div className={classes.margin}>
            <Link to="/transactions"> TRANSACTIONS </Link>
          </div>
        ) : (
          ''
        )}
        {url !== '/portfolio' ? (
          <div className={classes.margin}>
            <Link to="/portfolio"> PORTFOLIO </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </F>
  );
};

export const PrivateLinks = withStyles(styles)(withRouter(WrappedComponent));
