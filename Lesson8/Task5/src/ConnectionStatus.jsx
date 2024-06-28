import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
    classStyle: 'status',
  };

  componentDidMount() {
    this.stat = window.addEventListener('offline', this.updateOnlineStatus);
    this.stat = window.addEventListener('online', this.updateOflineStatus);
  }

  componentWillUnmount() {
    clearStat(this.stat);
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
