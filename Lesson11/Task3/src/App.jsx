import React, { Component } from 'react';
import Expand from './Expand.jsx';

class App extends Component {
  state = {
    isOpen: false,
  };

  showDialog = () => {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true,
      });
    } else {
      this.setState({
        isOpen: false,
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Expand isOpen={this.state.isOpen} onClose={this.showDialog} title="Some title">
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
