import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Demo from '../view/Demo/Demo.js';
import Home from '../view/Home/Home.js';
import Main from '../view/Main/Main.js';

function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="home" component={Home} />
        <Route path="demo" component={Demo} />
      </Route>
    </Router>
  );
}


export default Routes;
