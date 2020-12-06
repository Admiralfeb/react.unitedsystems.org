import { gql, useMutation } from '@apollo/client';
import { IBuildInfoInsert } from '../models/buildInfoInsert';

export const useAddBuild = () => {
  const [addBuildMutation] = useMutation<IBuildInfoInsert>(gql`
    mutation AddBuild($build: ShipBuildsv2InsertInput!) {
      addedBuild: insertOneShipBuildsv2(data: $build) {
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

  const addShipBuild = async (build: IBuildInfoInsert) => {
    const addedBuild = await addBuildMutation({
      variables: {
        build: {
          ...build,
        },
      },
    });
    return addedBuild;
  };

  return addShipBuild;
};
