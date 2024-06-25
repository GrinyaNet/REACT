import React, { Component, useState, useEffect } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggetIn: false,
      setTimeOut: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggetIn: true,
      setTimeOut: false,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggetIn: false,
      setTimeOut: false,
    });
  };

  handleSetTime = () => {
    this.setState({
      setTimeOut: true,
    });
  };

  render() {
    let button;

    if (this.state.isLoggetIn) {
      button = <Spinner />;
      setTimeout(this.handleSetTime, 2000);
      if (this.state.setTimeOut) {
        button = <Logout onLogout={this.handleLogout} />;
      }
    } else {
      button = <Login onLogin={this.handleLogin} />;
    }

    return <div>{button}</div>;
  }
}

export default Auth;
