import { withStyles } from '@material-ui/core/styles';
import { withAuthStatus, withAuthActions } from './auth';
import { withSocket, withStockPrice, withStocks } from './stocks';
import { withPortfolio, withTransactions } from './user';

export {
  withAuthStatus,
  withAuthActions,
  withSocket,
  withStockPrice,
  withStocks,
  withPortfolio,
  withTransactions,
  withStyles
};
