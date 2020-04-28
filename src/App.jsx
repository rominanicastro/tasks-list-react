import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
// package to detect code changes and refresh the client immediately
import { hot } from 'react-hot-loader';

const App = ({ children }) => (
  <div className="app">{children}</div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default hot(module)(App);
