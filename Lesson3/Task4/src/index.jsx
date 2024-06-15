import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserData from './Greeting';



const rootElement = document.querySelector('#root');

const userInfo = {
    firstName: 'John',
    lastName: 'Doe',    
    birthDate: '1991-01-17T11:11:11.819Z'   
    
};


ReactDOM.render(<UserData user={userInfo} date={userInfo.birthDate} />, rootElement);
