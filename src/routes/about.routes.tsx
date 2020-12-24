import { Route, Switch, useRouteMatch } from 'react-router-dom';
import {
  About,
  AboutAllies,
  AboutHC,
  AboutRules,
  Carriers,
} from 'components/about';
import React from 'react';

export const AboutRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact>
        <About />
      </Route>
      <Route path={`${path}/rules`}>
        <About />
        <AboutRules />
      </Route>
      <Route path={`${path}/hc`}>
        <About />
        <AboutHC />
      </Route>
      <Route path={`${path}/allies`}>
        <About />
        <AboutAllies />
      </Route>
      <Route path={`${path}/fc`}>
        <About />
        <Carriers />
      </Route>
    </Switch>
  );
};
