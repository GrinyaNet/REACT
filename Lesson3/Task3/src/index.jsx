import React from 'react';
import ReactDOM from 'react-dom';
import  SearchField  from './Search';
import './index.scss';
import './search.scss';


const rootElement = document.querySelector('#root');


ReactDOM.render(<SearchField name="Tom"/>, rootElement);
