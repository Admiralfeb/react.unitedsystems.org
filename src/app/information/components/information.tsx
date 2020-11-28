import { makeStyles, Typography } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { InfoDocs } from './info-docs';
import { InfoGuides } from './info-guides';
import { InfoTools } from './info-tools';
import { InfoUSCLinks } from './info-usclinks';
const ShipBuilds = lazy(() => import('./guides/shipBuilds'));
// import ShipBuilds from './guides/shipBuilds';

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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={path}>
            <Typography variant='h2' className={classes.header}>
              USC Data Archive
            </Typography>
            <InfoUSCLinks />
            <InfoGuides />
            <InfoTools />
            <InfoDocs />
          </Route>
          <Route path={`${path}/builds`}>
            <ShipBuilds />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
