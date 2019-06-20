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
      <F key={i}>
        <div>
          {formattedDate} {stock.symbol} ${stock.sale_price} x{stock.quantity} $
          {(+stock.sale_price * stock.quantity).toFixed(2)}
        </div>
      </F>
    );
  });
  return (
    <F>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>Transactions View</div>
              <div>{user_name}</div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}> {renderStocks}</Paper>
          </Grid>
        </Grid>
      </div>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
