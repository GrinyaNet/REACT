import React from 'react';
import UserForm from './UserForm.jsx';



const App = () => {

 const onSubmit = formData => {
        console.log(formData);
      };

  return (
    <UserForm onSubmit={onSubmit} />
  );
};

export default App;

