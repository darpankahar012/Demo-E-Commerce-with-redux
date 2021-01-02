import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routes from './routes';
// import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <App /> */}
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);