// External dependencies
import React from 'react';
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom';

// Internal dependencies
// import { NotFound } from 'pages/error';
// import { Main, ValidRegister } from '../pages';
import Auth from '../features/auth/containers/Auth';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Auth} />
    </Switch>
  </HashRouter>
);

export default Root;
