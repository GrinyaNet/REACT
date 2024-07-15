import React from 'react';


const Expand = ({ children, title }) => {
  
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

  if (isOpen) {
    const element = (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={showDialog}>
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </button>
        </div>
        <div className="expand__content">{children}</div>
      </div>
    );
    return element;
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={showDialog}>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Expand;
