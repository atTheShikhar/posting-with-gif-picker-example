import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalState from './context/GlobalState';
import './global.css';

ReactDOM.render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById('root')
);

