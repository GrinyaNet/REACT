import React, { Component } from 'react';


class Expand extends Component  {
  //{ children, title } = this.props;
//const Expand = ({ children, title }) => {
  
  state = {
    isOpen: false,
  };

  showDialog = () => {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true,
      });
    } else {
      this.setState({
        isOpen: false,
      });
    }
  };
render() {
  return (
  //if (this.state.isOpen) {
    //const element = (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.showDialog}>
            {this.state.isOpen ? (
              <i className="fas fa-chevron-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </button>
          {/* <button className="expand__toggle-btn" onClick={this.showDialog}>            
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </button> */}
        </div>
        {this.state.isOpen && <div className="expand__content">{this.props.children}</div>}
        {/* <div className="expand__content">{this.props.children}</div> */}
      </div>
    //);
    //return element;
          )
  }

  // return (
  //   <div className="expand border">
  //     <div className="expand__header">
  //       <span className="expand__title">{this.props.title}</span>
  //       <button className="expand__toggle-btn" onClick={this.showDialog}>
  //         <i className="fa fa-chevron-down" aria-hidden="true"></i>
  //       </button>
  //     </div>
  //   </div>
  // );
//}
};

export default Expand;
