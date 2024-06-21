import React, { Component } from "react";
import Greeting from "./Greeting.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggetIn: false,
        };
    }

handleLogin = () => {
    this.setState({
isLoggetIn: true,
    });
}

handleLogout = () => {
    this.setState({
isLoggetIn: false,
    });
}

    render() {

        let button;

        if (this.state.isLoggetIn) {
            
            button = <Logout onLogout={this.handleLogout} />;

        } else {
            button = <Login onLogin={this.handleLogin} />;
            
        }

        return (
            <div className="panel">
                <Greeting isLoggetIn={this.state.isLoggetIn}/>
                <div>{button}</div>
            </div>
        );
    }
}

export default Auth;

//button = <button onClick={this.handleLogout}>Logout</button>;
//button = <button onClick={this.handleLogin}>Login</button>;