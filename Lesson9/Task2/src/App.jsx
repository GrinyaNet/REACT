import React from 'react';
import UserForm from './UserForm.jsx';



const App = () => {

  const createUser = state => {
        console.log(state);
      };

  return (
    <UserForm onSubmit={createUser} />
  );
};

export default App;

