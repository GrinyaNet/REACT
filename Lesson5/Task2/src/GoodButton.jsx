import React from "react";

class GoodButton extends React.Component {
    handleClick(event) {
        
alert(event.target.lastChild.nodeValue);
    }
render () {
    return (
        <button className="fancy-button" onClick={this.handleClick}>Click me!</button>
    );
}
}

export default GoodButton;