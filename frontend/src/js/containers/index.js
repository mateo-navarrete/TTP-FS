import { withStyles } from '@material-ui/core/styles';
import { withAuthStatus, withAuthActions } from './auth';
import { withSocket } from './stocks';
import { withPortfolio, withTransactions } from './user';

export {
  withAuthStatus,
  withAuthActions,
  withSocket,
  withPortfolio,
  withTransactions,
  withStyles
};
