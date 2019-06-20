//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAuthStatus,
  registerUser,
  signinUser,
  signoutUser
} from '../../actions';

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthStatus: () => dispatch(getAuthStatus()),
    registerUser: user => dispatch(registerUser(user)),
    signinUser: user => dispatch(signinUser(user)),
    signoutUser: () => dispatch(signoutUser()),
  };
};

export const withAuthActions = WrappedComponent => {
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
