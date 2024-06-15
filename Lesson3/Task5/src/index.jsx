import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserData from './Profile';



const rootElement = document.querySelector('#root');

const userData = {
    firstName: 'James',
    lastName: 'Bond',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London',
  };

ReactDOM.render(<UserData user={userData} date={userData.birthDate}/>, rootElement);
