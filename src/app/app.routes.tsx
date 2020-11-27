import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { About, Information, Home, Join, NotFound } from './components';

export const AppRoutes = () => {
  return (
    <Switch>
      <Redirect from='/' to='/home' exact />
      <Route path='/home' exact>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/join'>
        <Join />
      </Route>
      <Route path='/information'>
        <Information />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};
