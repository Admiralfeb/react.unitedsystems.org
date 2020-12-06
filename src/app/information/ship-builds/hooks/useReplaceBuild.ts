import { gql, useMutation } from '@apollo/client';
import { IBuildInfoInsert } from '../models/buildInfoInsert';

export const useReplaceBuild = () => {
  const [replaceBuildMutation] = useMutation<IBuildInfoInsert>(gql`
    mutation AddBuild($build: ShipBuildsv2InsertInput!) {
      updatedBuild: replaceOneShipBuildsv2(
        query: { _id: $buildID }
        data: $build
      ) {
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

  const replaceShipBuild = async (build: IBuildInfoInsert) => {
    const updatedBuild = await replaceBuildMutation({
      variables: {
        buildID: build._id,
        build: {
          ...build,
        },
      },
    });
    return updatedBuild;
  };

  return replaceShipBuild;
};
