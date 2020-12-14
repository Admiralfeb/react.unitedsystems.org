import { EDSpinner } from '@admiralfeb/react-components';
import { useCallback, useEffect, useState } from 'react';
import { filterShipBuilds } from 'functions/shipBuilds/filterShipBuilds';
import { useShipBuilds } from 'hooks/shipBuilds/useShipBuilds';
import { IBuildInfov2, IQuery } from 'models/shipBuilds';
import { BuildCard } from './buildCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export const BuildList = (props: { buildQuery: IQuery | undefined }) => {
  const [queriedBuilds, setQueriedBuilds] = useState<IBuildInfov2[]>();
  const { buildQuery } = props;
  const { loading, shipBuilds } = useShipBuilds();
  const classes = useStyles();

  let filterBuilds = useCallback(() => {
    if (loading) {
      return;
    }
    console.log(shipBuilds);
    const filtered = filterShipBuilds(shipBuilds, buildQuery);
    setQueriedBuilds(filtered);
  }, [loading, shipBuilds, buildQuery]);

  useEffect(() => {
    if (loading) {
      return;
    }
    filterBuilds();
  }, [loading, filterBuilds]);

  return (
    <div className={classes.root}>
      {loading ? (
        <EDSpinner />
      ) : (
        queriedBuilds?.map((ship) => {
          return (
            <BuildCard key={(ship._id as unknown) as string} shipBuild={ship} />
          );
        })
      )}
    </div>
  );
};
