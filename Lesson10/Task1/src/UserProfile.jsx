import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    if (!this.props.userDate) { 
      return null;
    }
    const { name, location, avatar_url } = this.props.userDate; 
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={avatar_url}
          //src="https://avatars1.githubusercontent.com/u/9919?v=4"
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  };
}

export default UserProfile;