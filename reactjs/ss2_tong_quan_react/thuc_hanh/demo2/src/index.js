import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const h1Element1 = React.createElement(
    'h1',
    {
        id: 'id1',
        className: "cls1",
        style: {
            color: "red",
            background: "yellow"
        }
    }
    , "Hello ReactJS");
const h1Element2 = React.createElement(
    'h1',
    {
        id: 'id1',
        className: "cls1",
        style: {
            color: "red",
            background: "yellow"
        }
    }
    , "Hello ReactJS");
const divElement = React.createElement(
    'div',
    null,
    h1Element1,
    h1Element2);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
