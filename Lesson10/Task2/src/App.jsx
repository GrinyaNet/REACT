import React, { Component, useId } from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends Component {
//class Page extends Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Form',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const {userData} = this.state;
    return (
      <div className="page">
        <h1 class="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main class="content">
          <ShoppingCart userDate={userDate} />

          <Profile userDate={userDate} handleChange={handleChange} />
        </main>
      </div>
    );
  }
}
export default App;
