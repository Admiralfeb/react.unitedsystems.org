import { makeStyles } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import {
  AboutAllies,
  AboutHC,
  AboutRules,
  Carriers,
  Infographic,
  Information,
  ShipReviews,
} from 'components/information';
import { NotFound } from 'components';
import { EDSpinner } from '@admiralfeb/react-components';
import { infoGraphics } from 'data/information/infographicList';
const ShipBuilds = lazy(() => import('components/information/shipBuilds'));

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
      <Suspense fallback={<EDSpinner />}>
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
            <Carriers />
          </Route>
          <Route path={`${path}/builds`}>
            <ShipBuilds />
          </Route>
          <Route path={`${path}/reviews`}>
            <ShipReviews />
          </Route>
          {infoGraphics.map((graphic) => (
            <Route key={graphic.id} path={`${path}/${graphic.id}`}>
              <Infographic img={graphic.id} />
            </Route>
          ))}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
