import React, { Component } from "react";
import UserGreeting from "./UserGreeting.jsx";
import GuestGreeting from "./GuestGreeting.jsx";

const Greeting = props => {
    if (props.isLoggetIn) {
        return (
            <UserGreeting />
        );
    }
    return <GuestGreeting />;
};

export default Greeting;