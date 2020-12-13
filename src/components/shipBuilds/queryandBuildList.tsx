import { Fab, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useCallback, useRef, useState } from 'react';
import { BuildList } from './builds/buildList';
import { IQuery } from 'models/shipBuilds';
import { Query } from './query/query';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
  root: {
    '& p': {
      textAlign: 'center',
    },
  },
  fab: {
    position: 'fixed',
    bottom: '5px',
    right: '10px',
  },
});

export const QueryandBuildList = () => {
  const [query, setQuery] = useState<IQuery>();
  const buildRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width:1000px)');
  const classes = useStyles();

  const handleQuery = useCallback((query: IQuery) => {
    setQuery(query);
  }, []);

  const handleFab = () => {
    if (buildRef.current) {
      buildRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={classes.root}>
      <Typography variant="h3">Ship Build Archive</Typography>
      <Query updateQuery={handleQuery} />
      <div ref={buildRef}>
        <BuildList buildQuery={query} />
      </div>
      {isMobile && (
        <div className={classes.fab}>
          <Fab color="primary" className="fab" onClick={handleFab}>
            <ArrowDownwardIcon />
          </Fab>
        </div>
      )}
    </section>
  );
};
