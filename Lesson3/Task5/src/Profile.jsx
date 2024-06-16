import React from 'react';
import moment from 'moment';


const formatDate = date => moment(date).format('DD MMM YYYY');

 const UserData = (userData) => {
  return (
    <>
    <h1 className="profile__name">{userData.user.firstName} {userData.user.lastName}</h1>
    <h1 className="profile__birth">{'Was born'} {formatDate(userData.date)} {'in'} {userData.user.birthPlace}</h1>
  </>
  );
};
  
export default UserData;