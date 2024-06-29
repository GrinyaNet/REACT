import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
    classStyle: 'status',
  };

  componentDidMount() {
    window.addEventListener('offline', this.updateOflineStatus);    
    window.addEventListener('online', this.updateOnlineStatus);
    this.updateOflineStatus();
    this.updateOnlineStatus();
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.updateOflineStatus);
    window.removeEventListener('online', this.updateOnlineStatus);
  }

  updateOflineStatus = () => {
    this.setState({
      status: 'offline',
      classStyle: 'status_offline',
    });
  };

  updateOnlineStatus = () => {
    this.setState({
      status: 'online',
      classStyle: 'status',
    });
  };

  render() {
    const { status, classStyle } = this.state;

    return <div className={classStyle}>{status}</div>;
  }
}

export default ConnectionStatus;
