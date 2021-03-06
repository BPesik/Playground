import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "./store/index";
import { Provider } from "react-redux";
import { createStore } from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
