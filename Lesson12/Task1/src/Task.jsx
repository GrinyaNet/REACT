import React from 'react';
import className from 'classnames';

const Task = ( { done, text }) => {
    //const listItemClasses = className('list-item', {'list-item_done': done});
  return (
    <li className={className('list-item', {'list-item_done': done})}>
      <input type="checkbox" className="list-item__checkbox" defaultChecked={done} />
      <span className='list-item__text'>{text}</span>
      <button className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
