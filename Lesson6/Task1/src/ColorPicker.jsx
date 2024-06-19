import React, { Component } from "react";



class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
        }
       
    }
    coral () {        
        this.setState({            
            color: 'Coral',            
        });        
    }

    aqua () {        
        this.setState({            
            color: 'Aqua',            
        });        
    }

    bisque () {        
        this.setState({            
            color: 'Bisque',            
        });        
    }

    reset () {        
        this.setState({            
            color: '',            
        });        
    }
    

    render() {
        return (
            
            <div>
  <div className="picker__title">{this.state.color}</div>
  <div>
    <button className="picker__button picker__button_coral" onMouseOver={() => this.coral()} onMouseOut={() => this.reset()}></button>
    <button className="picker__button picker__button_aqua" onMouseOver={() => this.aqua()} onMouseOut={() => this.reset()}></button>
    <button className="picker__button picker__button_bisque" onMouseOver={() => this.bisque()} onMouseOut={() => this.reset()}></button>
  </div>
</div>
        )
    }
}

export default ColorPicker;