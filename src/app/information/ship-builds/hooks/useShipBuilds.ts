import { gql, useQuery } from '@apollo/client';
import { IBuildInfo } from '../models';

export const useShipBuilds = () => {
  const { data, loading, error } = useQuery<{ shipBuilds: IBuildInfo[] }>(gql`
    query AllShipBuilds {
      shipBuilds {
        _id
        author
        beginner
        buildLink
        description
        engLevel
        guardian
        moreInfo
        powerplay
        ship
        specializations
      }
    }
  `);
  if (error) {
    throw new Error(`Failed to fetch ship builds: ${error.message}`);
  }

  const shipBuilds = data?.shipBuilds ?? [];

  return { shipBuilds, loading };
};
