import React, { Component, useState, useEffect } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggetIn: false,
            setTimeOut: false,
        };
    }
    
handleLogin = () => {
    
    this.setState({
isLoggetIn: true,
setTimeOut: false,

    });
           
}

handleLogout = () => {
    this.setState({
isLoggetIn: false,
setTimeOut: false,
    });
    
}

handleSetTime = () => {
    this.setState({
        //isLoggetIn: true,
        setTimeOut: true,
            });
}

    render() {

        let button;

        if (this.state.isLoggetIn) {            
            
            button = <Spinner />
            setTimeout(this.handleSetTime, 2000)
            if (this.state.setTimeOut)
                {
                    button = <Logout onLogout={this.handleLogout} />
                }
            //setTimeout('<Logout onLogout={this.handleLogout} />', 5000)
            // button = <Logout onLogout={this.handleLogout} />
//             useEffect(() => {
//                 const timeoutId = setTimeout(() => {
//                     setIsVisible(false);
// //                    button = <Logout onLogout={this.handleLogout} />
//                 }, 2000);
            
//                 return () => clearTimeout(timeoutId);
//               }, []);              
            

        } else {
            button = <Login onLogin={this.handleLogin} />
            
        }

        return (            
                <div>{button}</div>
                //{isVisible && <Logout onLogout={this.handleLogout} />}
        );
    }
}

export default Auth;

//button = <button onClick={this.handleLogout}>Logout</button>;
//button = <button onClick={this.handleLogin}>Login</button>;