import React from 'react';
import moment from 'moment';


const formatDate = date => moment(date);
//const formatDate = date => moment(date).format('DD MM YYYY');
// const m = moment(date);
// const resultData = moment();
// const ddd = resultData.diff(m);
// console.log(ddd);

 const UserData = (props) => {
  return (
    <div className="greeting">{`My name is`} {props.user.firstName} {props.user.lastName} {`. I am`} {moment().diff(formatDate(props.date), "year")} {`years old`}</div>
  
  );
};
  
export default UserData;