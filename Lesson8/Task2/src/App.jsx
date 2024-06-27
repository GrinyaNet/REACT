import React, { Component } from "react";
import Clock from './Clock.jsx';
//import { render } from "react-dom";

class App extends Component {
    constructor(props) {
super(props);
this.state = {
    visible: true,
};
this.toggle = this.toggle.bind(this);
    }
    

    toggle() {
        this.setState ({
            visible: !this.state.visible,
        })
    };

    render() {
        return (
        <>
        <button onClick={this.toggle}>Toggle</button>
        { this.state.visible && <Clock  offset={-5} location={'New York'}/>}
        { this.state.visible &&<Clock  offset={2} location={'KYIV'}/>}
        { this.state.visible &&<Clock  offset={0} location={'LONDON'}/>}
        </>
        )
    };
};

export default App;