import React, { Component } from "react";
import Greeting from "./Greeting.jsx";

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
button = <button onClick={this.handleLogout}>Logout</button>;
        } else {
            button = <button onClick={this.handleLogin}>Login</button>;
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