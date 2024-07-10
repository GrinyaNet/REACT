import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    if (!this.state.userDate) {
      return null;
    }
    const { name, location, avatar_url } = this.state.userDate;
    return (
      <div class="user">
        <img
          alt="User Avatar"
          src={avatar_url}
          //src="https://avatars1.githubusercontent.com/u/9919?v=4"
          class="user__avatar"
        />
        <div class="user__info">
          <span class="user__name">{name}</span>
          <span class="user__location">{location}</span>
        </div>
      </div>
    );
  };
}

export default UserProfile;