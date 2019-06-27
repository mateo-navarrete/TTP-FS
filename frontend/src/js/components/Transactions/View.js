//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Grid, Paper } from '../material';
import { withStyles } from '../../containers';
import { formatDate } from '../../utils';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const WrappedComponent = ({ classes, transactions, user_name, ...props }) => {
  const renderStocks = transactions.map((stock, i) => {
    let formattedDate = formatDate(stock.date);
    return (
      <Paper className={classes.paper} key={i} style={{ marginBottom: '2px' }}>
        <div className="flex space-around">
          <div>{formattedDate} </div>
          <div>{stock.symbol}</div>
          <div>x{stock.quantity}</div>
          <div>@${stock.sale_price}</div>
          <div>total: ${(+stock.sale_price * stock.quantity).toFixed(2)}</div>
        </div>
      </Paper>
    );
  });
  return (
    <F>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1 className="lato">{user_name} Transactions</h1>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {renderStocks}
          </Grid>
        </Grid>
      </div>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
