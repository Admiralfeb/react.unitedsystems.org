import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { IBuildInfoInsert } from '../models/buildInfoInsert';

const AddBuildMutation = loader('../graphql/insertOneShipbuildsv2.gql');
const ReplaceBuildMutation = loader('../graphql/replaceOneShipbuildsv2.gql');

export const useShipBuildMutations = () => {
  return {
    addBuild: useAddBuild(),
    replaceBuild: useReplaceBuild(),
  };
};

const useAddBuild = () => {
  const [addBuildMutation] = useMutation<IBuildInfoInsert>(AddBuildMutation);

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

const useReplaceBuild = () => {
  const [replaceBuildMutation] = useMutation<IBuildInfoInsert>(
    ReplaceBuildMutation
  );

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
