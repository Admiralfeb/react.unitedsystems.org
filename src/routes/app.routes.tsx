import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, NotFound } from 'components';
import React, { lazy, Suspense } from 'react';
import { EDSpinner } from '@admiralfeb/react-components';
import { InformationRoutes } from './information.routes';
import { AboutRoutes } from './about.routes';
import { JoinRoutes } from './join.routes';
import { Releases } from 'components/releases/releases';
import { MassacreKillTracker } from 'components/information/massacre/massacreKillTracker';

const ShipBuilds = lazy(() => import('routes/shipBuilds.routes'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<EDSpinner />}>
      <Switch>
        <Route path="/releases/:id">
          <Releases />
        </Route>
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
        <Route path="/massacres">
          <MassacreKillTracker />
        </Route>
        <Route path="/join">
          <JoinRoutes />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};
