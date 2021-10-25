import ReactDOM from 'react-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// * NODE PACKAGES

import rootReducer from '@redux/index';
import RootRouter from '@router/index';
// * ABSOLUTE PATH PACKAGES

import './index.css';
// * RELATIVE PATH PACKAGES

// ? --------------------------------------------------------------
//   ------------------------- CONFIG -----------------------------
// ? --------------------------------------------------------------
const isProduction = (!((process.env.NODE_ENV || 'development') === 'development'));
dotenv.config({ path: isProduction ? './.env' : './.env.development' });
// NOTE READ ENVIRONMENT VARIABLE FROM .env file

axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
// ? --------------------------------------------------------------
//   ------------------- ENVIRONMENT CONFIG -----------------------
// ? --------------------------------------------------------------

const enhancer = isProduction
  ? compose(applyMiddleware())
  : composeWithDevTools(applyMiddleware());
const store = createStore(rootReducer, enhancer);

// ? --------------------------------------------------------------
//   --------------------- REDUCER CONFIG -------------------------
// ? --------------------------------------------------------------

ReactDOM.render(
  <Provider store={ store }>
    <RootRouter />
  </Provider>,
  document.getElementById('root'),
);
