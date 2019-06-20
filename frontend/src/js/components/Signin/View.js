//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import React, { Fragment as F } from 'react';
import { Form } from './Form';
import {
  Avatar,
  Card,
  CardContent,
  LockOutlinedIcon,
  Typography
} from '../material';
import { withStyles } from '../../containers';

const styles = theme => ({
  avatar: {
    margin: `10px 0 ${theme.spacing(2)}px`,
    backgroundColor: '#2980B9',
  },
  card: {
    maxWidth: 400,
    minWidth: 275,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
});

const WrappedComponent = ({
  classes,
  handleSubmit,
  handleChange,
  user_name,
  email,
  showPassword,
  password,
  handleShowPassword,
  handleClick,
  ...props,
}) => {
  const renderHeader = (
    <div className="flex col align">
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Signin
      </Typography>
    </div>
  );
  return (
    <F>
      {renderHeader}
      <div className={classes.flex}>
        <Card className={classes.card}>
          <CardContent>
            <Form
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              user_name={user_name}
              email={email}
              showPassword={showPassword}
              password={password}
              handleShowPassword={handleShowPassword}
              handleClick={handleClick}
            />
          </CardContent>
        </Card>
      </div>
    </F>
  );
};

export const View = withStyles(styles)(WrappedComponent);
