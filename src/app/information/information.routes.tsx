import { makeStyles } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { Loading, NotFound } from '../components';
import { AboutAllies } from './components/about/about-allies';
import { AboutHC } from './components/about/about-hc';
import { AboutRules } from './components/about/about-rules';
import { FleetCarriers } from './components/about/fleetCarriers';
import { ShipReviews } from './components/guides/shipReviews';
import { Infographic } from './components/docs/infographic';
import { Information } from './information';
const ShipBuilds = lazy(() => import('./components/guides/shipBuilds'));

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

export const InformationRoutes = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <div className={classes.root}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={path}>
            <Information />
          </Route>
          <Route path={`${path}/about/rules`}>
            <AboutRules />
          </Route>
          <Route path={`${path}/about/hc`}>
            <AboutHC />
          </Route>
          <Route path={`${path}/about/allies`}>
            <AboutAllies />
          </Route>
          <Route path={`${path}/about/fc`}>
            <FleetCarriers />
          </Route>
          <Route path={`${path}/builds`}>
            <ShipBuilds />
          </Route>
          <Route path={`${path}/reviews`}>
            <ShipReviews />
          </Route>
          <Route path={`${path}/cave`}>
            <Infographic img="cave-johnson" />
          </Route>
          <Route path={`${path}/stationmap`}>
            <Infographic img="station-map" />
          </Route>
          <Route path={`${path}/fss`}>
            <Infographic img="fss" />
          </Route>
          <Route path={`${path}/scoopable`}>
            <Infographic img="scoopable" />
          </Route>
          <Route path={`${path}/coriolis`}>
            <Infographic img="coriolis" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
