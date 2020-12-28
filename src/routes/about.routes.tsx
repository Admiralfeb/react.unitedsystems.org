import { Route, Switch, useRouteMatch } from 'react-router-dom';
import {
  About,
  AboutAllies,
  AboutFaction,
  AboutHC,
  AboutRules,
  Carriers,
} from 'components/about';
import React from 'react';
import { Fade } from '@material-ui/core';

export const AboutRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Fade in={true}>
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
        <Route path={`${path}/faction`}>
          <About />
          <AboutFaction />
        </Route>
        <Route path={`${path}/fc`}>
          <About />
          <Carriers />
        </Route>
      </Switch>
    </Fade>
  );
};
