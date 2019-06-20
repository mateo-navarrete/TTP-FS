//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../actions';

const mapStateToProps = ({ auth, user }) => {
  return {
    email: auth.isAuthUser,
    user_id: user.user_id,
    user_name: user.user_name,
    total: user.total,
    transactions: user.transactions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: email => dispatch(getTransactions(email)),
  };
};

export const withTransactions = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getTransactions(this.props.email);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};
