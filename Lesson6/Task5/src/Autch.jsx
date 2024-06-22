import React, { Component, useEffect } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

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
            
            button = <Spinner />               
            setTimeout(button = <Logout onLogout={this.handleLogout} />, 4000);

        } else {
            button = <Login onLogin={this.handleLogin} />
            
        }

        return (            
                <div>{button}</div>           
        );
    }
}

export default Auth;

//button = <button onClick={this.handleLogout}>Logout</button>;
//button = <button onClick={this.handleLogin}>Login</button>;