import { gql, useQuery } from '@apollo/client';
import { IBuildInfov2 } from '../models';

export const useShipBuilds = () => {
  const { data, loading, error } = useQuery<{
    shipBuildsv2s: IBuildInfov2[];
  }>(gql`
    query AllShipBuilds {
      shipBuildsv2s {
        _id
        shipId
        specializations
        title
        buildLink
        engLevel
        hasGuardian
        hasPowerplay
        isBeginner
        author
        isVariant
        variants
        related
        description
        jsonBuild
      }
    }
  `);
  if (error) {
    throw new Error(`Failed to fetch ship builds: ${error.message}`);
  }
  const shipBuilds = data?.shipBuildsv2s ?? [];

  return { shipBuilds, loading };
};
