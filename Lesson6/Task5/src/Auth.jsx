import React, { Component, useState, useEffect } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {
    const [isVisible, setIsVisible] = useState(true);
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
            useEffect(() => {
                const timeoutId = setTimeout(() => {
                    setIsVisible(false);
//                    button = <Logout onLogout={this.handleLogout} />
                }, 2000);
            
                return () => clearTimeout(timeoutId);
              }, []);              
            

        } else {
            button = <Login onLogin={this.handleLogin} />
            
        }

        return (            
                <div>{button}</div>
                {isVisible && <Logout onLogout={this.handleLogout} />}
        );
    }
}

export default Auth;

//button = <button onClick={this.handleLogout}>Logout</button>;
//button = <button onClick={this.handleLogin}>Login</button>;