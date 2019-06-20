//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import Select from 'react-select';
import { FixedSizeList as FSList } from 'react-window';
import { StockSelected } from '../StockSelected';
import { withPortfolio, withStocks, withStockPrice } from '../../containers';

const height = 35;

class MenuList extends Component {
  render() {
    const { options, children, maxHeight, getValue } = this.props;
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;

    let renderSymbol = ({ index, style }) => {
      return <div style={style}>{children[index]}</div>;
    };

    return (
      <FSList
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {renderSymbol}
      </FSList>
    );
  }
}

class WrappedComponent extends Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.getStockPrice(selectedOption.symbol);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <F>
        <div>Stock Shop</div>
        <div>balance: ${(+this.props.total).toFixed(2)}</div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          components={{ MenuList }}
          options={this.props.stocksList}
        />
        <StockSelected stock={selectedOption} />
      </F>
    );
  }
}

export const StockShop = withStocks(
  withStockPrice(withPortfolio(WrappedComponent))
);
