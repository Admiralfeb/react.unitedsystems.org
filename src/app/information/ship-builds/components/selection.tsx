import { Fab, Typography, useMediaQuery } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { Builds } from '.';
import { IQuery } from '../models';
import { Query } from './query';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './selection.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AddBuild } from './addBuilds';

export const Selection = () => {
  const { path } = useRouteMatch();
  const [query, setQuery] = useState<IQuery>();
  const buildRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width:1000px)');

  const handleQuery = (query: IQuery) => {
    setQuery(query);
  };
  const handleFab = () => {
    if (buildRef.current) {
      buildRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Switch>
      <Route path={path} exact>
        <section className='selection'>
          <Typography variant='h3'>Ship Build Archive</Typography>
          <Query queryUpdate={handleQuery} />
          <div ref={buildRef}>
            <Builds buildQuery={query} />
          </div>
          {isMobile && (
            <div className='fab'>
              <Fab color='primary' className='fab' onClick={handleFab}>
                <ArrowDownwardIcon />
              </Fab>
            </div>
          )}
        </section>
      </Route>
      <Route path={`${path}/add`}>
        <AddBuild />
      </Route>
    </Switch>
  );
};
