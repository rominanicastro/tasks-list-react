import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import Home from './components/Home';

const store = createStore(
  reducers,
  {},
  // tasks: { tasks: localStorage.getItem('tasks') },
  applyMiddleware(reduxThunk),
);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Home} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
