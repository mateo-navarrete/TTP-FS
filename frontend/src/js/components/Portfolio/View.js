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
  prevStockData,
  ...props,
}) => {
  //TODO children => PortfolioHeader, StockList, StockShop
  let pValue = 0;
  // let update = false;
  // let nextState = {};
  const renderStocks =
    stockData &&
    portfolio.map((stock, i) => {
      let total_sum =
        stockData[stock.symbol] &&
        +(+stockData[stock.symbol].price * +stock.total_sum).toFixed(2);
      if (total_sum) pValue += total_sum;
      let fontColor = '#333';
      if (prevStockData[stock.symbol]) {
        if (+prevStockData[stock.symbol].price > +stockData[stock.symbol].price) {
          fontColor = '#F00';
        } else if (
          +prevStockData[stock.symbol].price < +stockData[stock.symbol].price
        ) {
          fontColor = '#0F0';
        }
      }

      // update = true;
      // nextState[stock.symbol] = +stock.price;
      // if (update) {
      // this.setState({
      //   stockPrice: { ...stockPrice, nextState },
      // });
      // update = false;
      // }

      return (
        <F key={i}>
          <div>
            {stock.symbol} {stock.total_sum} @$
            <span style={{ color: fontColor }}>
              {stockData[stock.symbol] && +(stockData[stock.symbol].price).toFixed(2)}
            </span>
            total$
            {total_sum}
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
