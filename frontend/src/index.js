import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyMapComponent from './MyMapComponent';
import reportWebVitals from './reportWebVitals';
import Safety from './safety';
import Food from './food';
import Mental from './mental';
import Education from './education';
import Shelter from './shelter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Food />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
