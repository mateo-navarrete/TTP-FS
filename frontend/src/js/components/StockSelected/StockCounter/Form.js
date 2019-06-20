import React from 'react';
import { withStyles } from '../../../containers';
import { Typography, Slider, Input } from '../../material';
import { Button } from './Button';

const styles = theme => ({
  root: {
    textAlign: 'left',
  },
  input: {
    width: 55,
    marginLeft: '10px',
  },
  flex: {
    display: 'flex',
  },
});

export const Form = props => {
  const classes = withStyles(styles);
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const onHandleTransaction = () => {
    const { symbol, stockPrice, email, handleTransaction } = props;
    let totalPrice = +(+stockPrice * value).toFixed(2);

    let transaction = {
      email: email,
      stock_symbol: symbol,
      sale_price: stockPrice,
      quantity: value,
      total: (+total - totalPrice).toFixed(2),
    };
    handleTransaction(transaction);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const { stockPrice, total } = props;

  let totalPrice = +stockPrice * value;
  let disabled = value === 0 || +total < totalPrice;
  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        quantity
      </Typography>
      <div className={classes.flex}>
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          style={{ textAlign: 'left' }}
        />
        <Input
          className={classes.input}
          value={value}
          margin="dense"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </div>
      <div>total Price ${totalPrice.toFixed(2)}</div>
      <div>
        <Button
          disabled={disabled}
          variant="contained"
          handleClick={onHandleTransaction}
        />
      </div>
    </div>
  );
};
