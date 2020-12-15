import { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import {
  AboutAllies,
  AboutHC,
  AboutRules,
  Carriers,
  Infographic,
  Information,
  MiningMap,
  ShipReviews,
} from 'components/information';
import { NotFound } from 'components';
import { EDSpinner } from '@admiralfeb/react-components';
import { infoGraphics } from 'data/information/infographicList';
const ShipBuilds = lazy(() => import('routes/shipBuilds.routes'));

export const InformationRoutes = () => {
  const { path } = useRouteMatch();

  return (
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
        <Route path={`${path}/mining`}>
          <MiningMap />
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
  );
};
