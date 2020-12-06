import { useQuery } from '@apollo/client';
import { IBuildInfov2 } from '../models';
import { loader } from 'graphql.macro';
import { useShipBuildMutations } from './useShipBuildMutations';

const AllShipBuildsv2s = loader('../graphql/allShipBuildsv2s.gql');

export const useShipBuilds = () => {
  const { shipBuilds, loading } = useAllShipBuilds();
  const { addBuild, replaceBuild } = useShipBuildMutations();
  return { loading, shipBuilds, addBuild, replaceBuild };
};

const useAllShipBuilds = () => {
  const { data, loading, error } = useQuery<{
    shipBuildsv2s: IBuildInfov2[];
  }>(AllShipBuildsv2s);
  if (error) {
    throw new Error(`Failed to fetch ship builds: ${error.message}`);
  }
  const shipBuilds = data?.shipBuildsv2s ?? [];

  return { shipBuilds, loading };
};
