import React from 'react';
import './App.scss';
// package to detect code changes and refresh the client immediately
import { hot } from 'react-hot-loader';

const App = () => (
  <div className="app">Hi there!</div>
);

export default hot(module)(App);
