//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import React, { Component } from 'react';
import { View } from './View';
import { withAuthActions } from '../../containers';

class WrappedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: '',
      email: '',
      showPassword: false,
    };
  }

  handleShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user_name, password, email } = this.state;
    this.props.registerUser({ user_name, password, email });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { user_name, showPassword, password, email } = this.state;
    return (
      <View
        user_name={user_name}
        email={email}
        password={password}
        showPassword={showPassword}
        handleChange={this.handleChange}
        handleSubmit={e => this.handleSubmit(e)}
        handleShowPassword={this.handleShowPassword}
        handleClick={e => this.handleSubmit(e)}
        {...this.props}
      />
    );
  }
}

export const Register = withAuthActions(WrappedComponent);
