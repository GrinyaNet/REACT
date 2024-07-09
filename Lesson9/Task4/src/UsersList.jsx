import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  state = {
    filterText: '',
    //value: '',
    //users: this.props.users,
    //count: 0,
    
  };

  
  // handleChange = value => {    
  //   this.setState({
  //     value: value,
  //   });
  // };

  handleChange = event => {    
    this.setState({
      filterText: event.target.value.toLowerCase,
    });
  };

 

  render() {
const { users } = this.props;
const { filterText } = this.state;
const usersToDisplay = users.filter(({ name }) => name.toLowerCase().includes(filterText));
// console.log('Render');    
//     let usersList;
//     let count;
//     //this.setState({ value: event.target.value });
//     if (!this.state.value) {
//        this.setState({ users: this.props.users });
//     } else {
//       usersList = this.state.users
//         .slice()
//         .filter(({ name }) => name.toLowerCase().includes(filterText.toLowerCase()));
//       count = usersList.lenght;

//        this.setState({ users: usersList, count: count });
//     }
    return (
      <div>        
          <Filter
            filterText={filterText}
            count={usersToDisplay.length}
            onChange={this.handleChange}
          />        

        <ul className="users">
          {usersToDisplay.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
