import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  state = {
    value: '',
    users: this.props.users,
    count: 0,
  };

  filterUser = event => {
    let usersList;
    let count;
    this.setState({ value: event.target.value });
    if (!event.target.value) {
      return this.setState({ users: this.props.users });
    } else {
      usersList = this.state.users
        .slice()
        .filter(({ name }) => name.toLowerCase().includes(filterText.toLowerCase()));
      count = usersList.lenght;

      return this.setState({ users: usersList, count: count });
    }
  };

  render() {
    return (
      <div>
        <div className="filter">
          <Filter filterText={this.state.value} count={this.state.count}/>
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
