import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Join, JoinForm, NotFound } from 'components';
import { InformationRoutes } from './information.routes';
import React, { lazy, Suspense } from 'react';
import { EDSpinner } from '@admiralfeb/react-components';
import { AboutRoutes } from './about.routes';
const ShipBuilds = lazy(() => import('routes/shipBuilds.routes'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<EDSpinner />}>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/about">
          <AboutRoutes />
        </Route>
        <Route path="/information">
          <InformationRoutes />
        </Route>
        <Route path="/builds">
          <ShipBuilds />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/joinForm1234">
          <JoinForm />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};
