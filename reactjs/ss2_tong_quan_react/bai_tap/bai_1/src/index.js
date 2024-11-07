import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const element1 = React.createElement(
    'li',
    null,
    'Hà Nội',
    );
const element2 = React.createElement(
    'li',
    null,
    'Đà Nẵng',
    );
const element3 = React.createElement(
    'li',
    null,
    'Hải Phòng',
    );
const element4 = React.createElement(
    'li',
    null,
    'Hồ Chí Minh',
    );
const element5 = React.createElement(
    'li',
    null,
    'Cần Thơ',
    );
const danhSach = React.createElement(
    'ul',
    null,
    "danh sách các thành phố trực thuộc trung ương của Việt Nam",
    element1,
    element2,
    element3,
    element4,
    element5
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(danhSach);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
