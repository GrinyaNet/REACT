import React, { Component, useId } from 'react';
import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

class Page extends Component {
  state = {
    userDate: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = userId => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
      .then(response => response.json())
      .then(userDate =>
        this.setState({
          userDate,
        }),
      );
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userDate={this.state.userDate} />
        </header>
        <UserProfile userDate={this.state.userDate} />
      </div>
    );
  }
}
export default Page;
