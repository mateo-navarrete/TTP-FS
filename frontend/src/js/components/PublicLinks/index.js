import React, { Fragment as F } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
        <Link to="/">HOME</Link>
      </div>
      <div className={classes.right}>
        {url !== '/signin' ? (
          <div className={classes.margin}>
            <Link to="/signin"> SIGNIN </Link>{' '}
          </div>
        ) : (
          ''
        )}
        {url !== '/register' ? (
          <div className={classes.margin}>
            <Link to="/register"> REGISTER </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </F>
  );
};

export const PublicLinks = withStyles(styles)(withRouter(WrappedComponent));
