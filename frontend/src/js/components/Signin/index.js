//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
import React, { Component } from 'react';
import { View } from './View';
import { withAuthActions } from '../../containers';

class WrappedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { password, email } = this.state;
    this.props.signinUser({ password, email });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { showPassword, password, email } = this.state;
    return (
      <View
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

export const Signin = withAuthActions(WrappedComponent);
