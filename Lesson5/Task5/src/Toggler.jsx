import React, { Component } from "react";



class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 'Off',
        }
       
    }
    reset () {
        if (this.state.counter === 'Off') {
        this.setState({            
            counter: 'On',
        });
    } else {
        this.setState({            
            counter: 'Off',
        });
    }
    }

    render() {
        return (
            <div className="toggler" onClick={() => this.reset()}>{this.state.counter}</div>
        )
    }
}

export default Toggler;