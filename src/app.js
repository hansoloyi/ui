import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import View from './components/View';
import Home from './components/Home';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={View}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);
