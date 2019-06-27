//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import {
  ArrowIcon,
  Paper
} from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
});

const WrappedComponent = ({
  classes,
  symbol,
  sharePrice,
  shares,
  totalValue,
  fontColor,
  ...props,
}) => {
  let arrowClass =
    fontColor === '#333' ? 'hidden' : fontColor === '#F00' ? 'hi' : ' ';
  return (
    <Paper className={classes.card} style={{ marginBottom: '2px' }}>
      <div className="flex space-around" style={{ color: fontColor }}>
        <div>{symbol}</div>
        <div className="flex col">
          <div>${sharePrice}</div>
          <div>{shares} shares</div>
          <div>${totalValue}</div>
        </div>
        <div className={arrowClass}>
          <ArrowIcon fontSize="small" />
        </div>
      </div>
    </Paper>
  );
};

export const View = withStyles(styles)(WrappedComponent);
