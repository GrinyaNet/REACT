import React from 'react';
//import UsersList from './UsersList';

const Filter = ({ filterText, count, state}) => {
  
 const onChange = (event) => {
    console.log('jjjjj');
    state(event.target.value)
    // let i = this.value;
    // console.log(i);
  }
  return (
    <>
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" value={filterText} onChange={onChange} />
    </>
  );
};

export default Filter;
