import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from '../../Task3/src/Comment';

const rootElement = document.querySelector('#root');

const userInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatarsl.githubusercontent.com'
};

ReactDOM.render(<Comment user={userInfo} text="God job!" date={new Date('2019-01-01T11:32:19.566Z')} />, rootElement);

