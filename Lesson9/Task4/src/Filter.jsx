import React from 'react';
import UsersList from './UsersList';

const Filter = ({ filterText, count }) => {
  return (
    <>
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" value={filterText} onChange={this.filterUser} />
    </>
  );
};

export default Filter;
