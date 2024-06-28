import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: online,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data,
        });
      });
  };

  render() {
    const { user } = this.state;
    if (!user) {
      return null;
    }
    const { name, location } = user;
    return (
      <div className="status status_offline">Offline</div>
  
    );
  }
}

export default ConnectionStatus;
