import { Paper, Typography } from '@material-ui/core';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../../../components';
import { useShipBuilds } from '../../hooks/useShipBuilds';

interface RouteParams {
  id: string;
}

export const BuildDetail = () => {
  const { loading, shipBuilds } = useShipBuilds();
  let { id } = useParams<RouteParams>();

  let foundBuild = useMemo(() => {
    if (loading) {
      return undefined;
    }

    let build = shipBuilds.find(
      (x) => x._id && ((x._id as unknown) as string) === id
    );

    return build;
  }, [id, loading, shipBuilds]);

  useEffect(() => {
    console.log({ foundBuild });
  }, [foundBuild]);

  return (
    <>
      <Typography variant="h3">Build Detail</Typography>
      {loading ? (
        <Loading />
      ) : (
        <Paper>
          <Typography>{foundBuild?.description}</Typography>
        </Paper>
      )}
    </>
  );
};
