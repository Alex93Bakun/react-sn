import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sanya'},
    {id: 3, name: 'Anya'},
    {id: 4, name: 'Andrey'},
    {id: 5, name: 'Sergey'},
    {id: 6, name: 'Lesha'}
];

let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is your IT-KAMASUTRA?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'},
];

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post.', likesCount: 23},
];

ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
