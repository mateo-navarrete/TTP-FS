//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPortfolio } from '../../actions';

const mapStateToProps = ({ auth, user }) => {
  return {
    email: auth.isAuthUser,
    user_id: user.user_id,
    user_name: user.user_name,
    total: user.total,
    portfolio: user.portfolio,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPortfolio: email => dispatch(getPortfolio(email)),
  };
};

export const withPortfolio = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getPortfolio(this.props.email);
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
