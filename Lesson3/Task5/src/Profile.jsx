import React from 'react';
import moment from 'moment';


const formatDate = date => moment(date).format('DD MMM YYYY');

 const UserData = (props) => {
  return (
    <>
    <h1 className="profile__name">{props.user.firstName} {props.user.lastName}</h1>
    <h1 className="profile__birth">{'Was born'} {formatDate(props.user.birthDate)} {'in'} {props.user.birthPlace}</h1>
  </>
  );
};
  
export default UserData;