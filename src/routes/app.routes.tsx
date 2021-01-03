import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Login, NotFound } from 'components';
import { lazy, Suspense } from 'react';
import { EDSpinner } from '@admiralfeb/react-components';
import { InformationRoutes } from './information.routes';
import { AboutRoutes } from './about.routes';
import { JoinRoutes } from './join.routes';
import { Releases } from 'components/releases/releases';
import { PasswordReset } from 'components/auth/passwordReset';
import { PasswordResetComplete } from 'components/auth/passwordResetComplete';
import { LoginComplete } from 'components/auth/loginComplete';

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
        <Route path="/join">
          <JoinRoutes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/loginComplete">
          <LoginComplete />
        </Route>
        <Route path="/resetPassword">
          <PasswordReset />
        </Route>
        <Route path="/resetComplete">
          <PasswordResetComplete />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};
