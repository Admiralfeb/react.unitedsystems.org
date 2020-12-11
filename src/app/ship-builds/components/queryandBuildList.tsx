import { Fab, Typography, useMediaQuery } from '@material-ui/core';
import { useRef, useState } from 'react';
import { BuildList } from './builds/buildList';
import { IQuery } from '../models';
import { Query } from './query/query';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './queryandBuildList.css';

export const QueryandBuildList = (props: {}) => {
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
    <section className="selection">
      <Typography variant="h3">Ship Build Archive</Typography>
      <Query queryUpdate={handleQuery} />
      <div ref={buildRef}>
        <BuildList buildQuery={query} />
      </div>
      {isMobile && (
        <div className="fab">
          <Fab color="primary" className="fab" onClick={handleFab}>
            <ArrowDownwardIcon />
          </Fab>
        </div>
      )}
    </section>
  );
};
