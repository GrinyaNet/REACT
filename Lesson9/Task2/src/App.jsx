import React from 'react';
import UserForm from './UserForm.jsx';



const App = () => {

  createUser = formData => {
        console.log(formData);
      };

  return (
    <UserForm onSubmit={this.onSubmit} />
  );
};

export default App;

