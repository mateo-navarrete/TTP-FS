//jscs:disable requireShorthandArrowFunctions
//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import React from 'react';
import { Button } from './Button';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Visibility,
  VisibilityOff
} from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  main: {},
  paper: {},
  cssLabel: {
    color: 'rgba(41, 128, 185, 1)',
    '&$cssFocused': {
      color: 'rgba(41, 128, 185, 1)',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'rgba(41, 128, 185, 1)',
    },
  },
  form: {
    width: `100% - ${theme.spacing(2)}`,
    margin: theme.spacing(1),
  },
});

const WrappedComponent = ({
  classes,
  email,
  user_name,
  password,
  showPassword,
  handleChange,
  handleSubmit,
  handleShowPassword,
  handleClick,
}) => {
  const disabled = !(user_name && password);
  return (
    <form className={classes.form} onSubmit={e => this.handleSubmit(e)}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="user_name" className={classes.cssLabel}>
          User Name
        </InputLabel>
        <Input
          onChange={handleChange}
          id="user_name"
          name="user_name"
          value={user_name}
          autoComplete="off"
          autoFocus
          className={classes.cssUnderline}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email" className={classes.cssLabel}>
          Email
        </InputLabel>
        <Input
          onChange={handleChange}
          id="email"
          name="email"
          value={email}
          autoComplete="off"
          className={classes.cssUnderline}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="adornment-password" className={classes.cssLabel}>
          Password
        </InputLabel>
        <Input
          name="password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={handleShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          className={classes.cssUnderline}
        />
      </FormControl>
      <Button
        disabled={disabled}
        handleClick={handleClick}
        variant="contained"
      />
    </form>
  );
};

export const Form = withStyles(styles)(WrappedComponent);
