import React from 'react';
import UserForm from './UserForm.jsx';



const App = () => {

  const onSubmit = state => {
        console.log(state);
      };

  return (
    <UserForm onSubmit={onSubmit} />
  );
};

export default App;

