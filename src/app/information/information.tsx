import { makeStyles, Typography } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { Loading } from '../components';
import { ShipReviews } from './components/guides/shipReviews';
import { docsList } from './components/info-docs-list';
import { guidesList } from './components/info-guides-list';
import { InfoSection } from './components/info-section';
import { toolsList } from './components/info-tools-list';
import { InfoUSCLinks } from './components/info-usclinks';
import { Infographic } from './components/infographic';
const ShipBuilds = lazy(() => import('./components/guides/shipBuilds'));

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  header: {
    textAlign: 'center',
  },
  paper: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
  },
  uscLinks: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
  },
  specialButton: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const Information = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <div className={classes.root}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={path}>
            <Typography variant='h2' className={classes.header}>
              USC Data Archive
            </Typography>
            <InfoUSCLinks />
            <InfoSection
              id='guides'
              key='guides'
              header='Guides'
              buttons={guidesList}
            />
            <InfoSection
              id='tools'
              key='tools'
              header='Tools'
              buttons={toolsList}
            />
            <InfoSection
              id='docs'
              key='docs'
              header='Documentation'
              buttons={docsList}
            />
          </Route>
          <Route path={`${path}/builds`}>
            <ShipBuilds />
          </Route>
          <Route path={`${path}/reviews`}>
            <ShipReviews />
          </Route>
          <Route path={`${path}/cave`}>
            <Infographic img='cave-johnson' />
          </Route>
          <Route path={`${path}/stationmap`}>
            <Infographic img='station-map' />
          </Route>
          <Route path={`${path}/fss`}>
            <Infographic img='fss' />
          </Route>
          <Route path={`${path}/scoopable`}>
            <Infographic img='scoopable' />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
