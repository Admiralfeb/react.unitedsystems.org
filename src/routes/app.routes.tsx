import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Join, NotFound } from 'components';
import { InformationRoutes } from './information.routes';
import React, { lazy, Suspense } from 'react';
import { EDSpinner } from '@admiralfeb/react-components';
const ShipBuilds = lazy(() => import('routes/shipBuilds.routes'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<EDSpinner />}>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" exact>
          <Home />
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};