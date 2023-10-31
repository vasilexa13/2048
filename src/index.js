import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configueStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { type } from '@testing-library/user-event/dist/type';
import { Provider, useDispatch, useSelector } from 'react-redux';

//REDUX
// action = { type: '', payload: '' };
const defaultState = {
  sizeReduser: 4,
}
const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case "change_size":
      return { ...state, sizeReduser: action.newSize }
    default:
      return state
  }
}
export let store = configureStore({ reducer: reducers });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode  >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode >
  </Provider>

);


