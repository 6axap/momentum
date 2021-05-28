import React from 'react';
import ReactDOM from 'react-dom';
import './components/style/index.css';

import ActivityMain from './components/activity'

ReactDOM.render(
  <React.StrictMode>
    <ActivityMain />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
