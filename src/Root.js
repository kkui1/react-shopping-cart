import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';

import store from './services/store';

const Root = ({ initialState = {} }) => (
  <Provider store={store(initialState)}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

export default Root;
