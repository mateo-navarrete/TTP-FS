//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAutocompleteStocks } from '../../actions';

const mapStateToProps = ({ stocks }) => {
  return {
    stocksList: stocks.stocksList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAutocompleteStocks: () => dispatch(getAutocompleteStocks()),
  };
};

export const withStocks = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      if (!this.props.stocksList.length) {
        this.props.getAutocompleteStocks();
      }
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
