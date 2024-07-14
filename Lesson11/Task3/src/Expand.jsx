import React from 'react';

const Expand = ({ isOpen, children, title, onClose }) => {
  const element = "";
  if (isOpen) {
     const element = (
      <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
      </div>
      <div className="expand__content">
        {children}
      </div>
    </div>
    )
    return element;
  }
  
  // if (!isOpen) {
  //   const element = (
  //     <i className="fas fa-chevron-down"></i>
  //   )
  //   return element;
  // }
  // } else {
  //   const element = (
  //     <i className="fas fa-chevron-up"></i>
  //   )
  //   return element;
  // }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </div>
      {/* <div className="expand__content">
        {children}
      </div> */}
    </div>
  );
};

export default Expand;
//<i class="fa fa-chevron-down" aria-hidden="true"></i>
//<i className="fas fa-chevron-up"></i>