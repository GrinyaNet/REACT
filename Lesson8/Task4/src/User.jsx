import React, { Component } from "react";

class User extends Component {
    state = {
        user: null,
    }
    render() {
        return (
<div className="user">  
  <img
    alt="User Avatar"
    src="https://avatars3.githubusercontent.com/u/69631?v=4"
    className="user__avatar"
  />
  <div className="user__info">
    
    <span className="user__name">{this.state.user.name}</span>
    
    <span className="user__location">{this.state.user.location}</span>
  </div>
</div>

        );
    }
}

export default User;