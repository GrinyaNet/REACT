import React from 'react';
import moment from 'moment';

const formatDate = date => moment().diff(moment(date), 'year');

 const UserData = (props) => {
  return (
        
    <div className="greeting">{`My name is`} {props.firstName} {props.lastName}{`. I am`} {formatDate(props.birthDate)} {`years old`}</div>
    //<div className="greeting">{`My name is`} {props.user.firstName} {props.user.lastName}{`. I am`} {formatDate(props.date)} {`years old`}</div>
  
  );
};
  
export default UserData;

//const UserData = (firstName, lastName, birthDate) => {