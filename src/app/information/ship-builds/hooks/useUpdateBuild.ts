import { gql, useMutation } from '@apollo/client';
import { IBuildInfoInsert } from '../models/buildInfoInsert';

export const useUpdateBuild = () => {
  const [updateBuildMutation] = useMutation<IBuildInfoInsert>(gql`
    mutation AddBuild($build: ShipBuildInsertInput!) {
      updatedBuild: updateOneShipBuild(query: { _id: $buildID }, data: $build) {
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
        id
      }
    }
  `);

  const updateShipBuild = async (build: IBuildInfoInsert) => {
    const updatedBuild = await updateBuildMutation({
      variables: {
        buildID: build._id,
        build: {
          ...build,
        },
      },
    });
    return updatedBuild;
  };

  return updateShipBuild;
};
