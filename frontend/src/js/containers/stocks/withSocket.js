//jscs:disable requireShorthandArrowFunctions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketIO from 'socket.io-client';
import { handleStockData } from '../../actions';

const mapStateToProps = ({ stocks, user }) => {
  return {
    iexsymbols: user.iexsymbols,
    stockData: stocks.stockData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleStockData: stockData => dispatch(handleStockData(stockData)),
  };
};

export const withSocket = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      const url = 'https://ws-api.iextrading.com/1.0/last'; //deep || last || tops ;
      this.socket = socketIO(url);
      this.socket.on('message', data => {
        let stockData = JSON.parse(data);
        this.props.handleStockData(stockData);
      });

      this.socket.on('connect', () => {
        console.log('connected', this.socket.id);
        this.socket.emit('subscribe', this.props.iexsymbols);
        // console.log('subscribed to: ', this.props.iexsymbols);
      });
    }

    componentWillUnmount() {
      this.socket.on('disconnect', () => {
        this.socket.emit('unsubscribe', this.props.iexsymbols);
        console.log('Disconnected.');
      });
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
