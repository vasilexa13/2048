import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './Components/store';
// module.exports = require('./lodash');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode  >
    < BrowserRouter >
      < Provider store={store} >
        <App />
      </Provider >
    </BrowserRouter >
  </React.StrictMode >

);


