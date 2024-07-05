import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  state = {
    value: '',
    users: this.props.users,
  };

  filterUser = event => {
    let usersList;
    this.setState({ value: event.target.value });
    if (!event.target.value) {
      return this.setState({ users: this.props.users });
    } else {
      usersList = this.state.users
        .slice()
        .filter(({ name }) => name.toLowerCase().includes(filterText.toLowerCase()));
      return this.setState({ users: usersList });
    }
  };

  render() {
    return (
      <div>
        <div className="filter">
          <Filter />
        </div>

        <ul className="users">
          {this.state.users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
