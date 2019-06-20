//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { StockShop } from '../StockShop';
import { Grid, Paper } from '../material';
import { withStyles } from '../../containers';

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

const WrappedComponent = ({
  classes,
  children,
  total,
  user_name,
  portfolio,
  stockData,
  ...props,
}) => {
  //TODO children => PortfolioHeader, StockList, StockShop
  let pValue = 0;
  const renderStocks =
    stockData &&
    portfolio.map((stock, i) => {
      let total =
        stockData[stock.symbol] &&
        +(+stockData[stock.symbol].price * +stock.total).toFixed(2);
      if (total) pValue += total;
      return (
        <F key={i}>
          <div>
            {stock.symbol} {stock.total} @$
            {stockData[stock.symbol] && stockData[stock.symbol].price}
            total$
            {total}
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
              <div>Portfolio View</div>
              <div>{user_name}</div>
              <div>balance: ${(+total).toFixed(2)}</div>
              <div>pValue: ${(+pValue).toFixed(2)}</div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}> {renderStocks}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <StockShop />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
