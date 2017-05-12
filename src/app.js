import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import View from './components/View';
import Home from './components/Home';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={View}>
      <Route path="/blog" component={Blog} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);
