import React, { Component } from 'react';

class UserList extends Component {

  state = {
    name: '',
    student: '',
    occupation: '',
    about: ''
  };
  
handleChange = event => {
  const { name, value, checked, type } = event.target;

  const val = type === 'checkbox'
  ? checked
  : value

  this.setState({
    [name]: val
  });
}

handleSubmit = event => {
  event.preventDefault();  
}

filterUser = (searchText, listUsers) => {
  if(!searchText) {
    return listUsers;
  }
  return listUsers.filter(({ car_model }) =>
  car_model.toLowerCase().includes(searchText.toLowerCase())
);
}
  

  render() {
    return (
      <ul className="users">
        {/* {usersList.map(user => (
            <User key={user.id} {...user} /> */}
      </ul>

     );
  }
}

export default UserList;
