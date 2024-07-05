import React from 'react';
import UsersList from './UsersList';

const Filter = ({ filterText, count }) => {
 const onChange = () => {
    //console.log(this.props.state.test);
  }
  return (
    <>
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" value={filterText} onChange={onChange} />
    </>
  );
};

export default Filter;
