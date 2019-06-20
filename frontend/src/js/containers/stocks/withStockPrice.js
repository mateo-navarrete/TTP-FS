//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStockPrice, handleTransaction } from '../../actions';

const mapStateToProps = ({ auth, stocks, user }) => {
  return {
    email: auth.isAuthUser,
    stockPrice: stocks.stockPrice,
    total: user.total,
    user_id: user.user_id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStockPrice: stock => dispatch(getStockPrice(stock)),
    handleTransaction: transaction => dispatch(handleTransaction(transaction)),
  };
};

export const withStockPrice = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};
