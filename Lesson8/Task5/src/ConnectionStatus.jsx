import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
    classStyle: 'status',
  };

  componentDidMount() {
    window.addEventListener('offline', this.updateOnlineStatus);
    window.addEventListener('online', this.updateOflineStatus);
  }

  updateOnlineStatus = () => {
    this.setState({
      status: 'offline',
      classStyle: 'status_offline',
    });
  };

  updateOflineStatus = () => {
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
