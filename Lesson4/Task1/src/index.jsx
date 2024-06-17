import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';




const rootElement = document.querySelector('#root');


//ReactDOM.render(<UserData userData={userData} birthDate={userData.birthDate}/>, rootElement);
ReactDOM.render(<App />, rootElement);
