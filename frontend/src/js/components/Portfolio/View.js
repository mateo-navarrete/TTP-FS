//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { StockShop } from '../StockShop';
import { StockDetails } from '../StockDetails';
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

  const renderStockDetails =
    stockData &&
    portfolio.map((stock, i) => {
      let total_sum =
        stockData[stock.symbol] &&
        +(+stockData[stock.symbol].price * +stock.total_sum).toFixed(2);
      let total_sum_str = stockData[stock.symbol] && total_sum.toFixed(2);
      if (total_sum) pValue += total_sum;
      let fontColor = '#333';
      if (prevStockData[stock.symbol]) {
        if (
          +prevStockData[stock.symbol].price > +stockData[stock.symbol].price
        ) {
          fontColor = '#F00';
        } else if (
          +prevStockData[stock.symbol].price < +stockData[stock.symbol].price
        ) {
          fontColor = '#0F0';
        }
      }

      let len =
        stockData[stock.symbol] && stockData[stock.symbol].price.toFixed(2);
      let price =
        stockData[stock.symbol] && len[len.length - 2] === '.'
          ? len + '0'
          : len;

      return (
        <StockDetails
          key={i}
          symbol={stock.symbol}
          shares={stock.total_sum}
          sharePrice={price}
          totalValue={total_sum_str}
          fontColor={fontColor}
        />
      );
    });

  return (
    <F>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1 className="lato">{user_name} Portfolio</h1>
              <div className="flex space-around">
                <div>Cash Balance: ${(+total).toFixed(2)}</div>
                <div>Portfolio Value: ${(+pValue).toFixed(2)}</div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            {renderStockDetails}
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
