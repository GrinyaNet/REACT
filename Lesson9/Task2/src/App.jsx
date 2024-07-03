import React from 'react';
import UserForm from './UserForm.jsx';



const App = () => {

  createUser = state => {
        console.log(state);
      };

  return (
    <UserForm onSubmit={this.createUser} />
  );
};

export default App;

