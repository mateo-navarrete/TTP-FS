//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthStatus } from '../../actions';

const mapStateToProps = ({ auth }) => {
  return {
    isAuthUser: auth.isAuthUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthStatus: () => dispatch(getAuthStatus()),
  };
};

export const withAuthStatus = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getAuthStatus();
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
