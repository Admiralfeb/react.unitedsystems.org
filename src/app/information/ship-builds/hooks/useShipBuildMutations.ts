import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { IBuildInfoInsert } from '../models/buildInfoInsert';

const AddBuildMutation = loader('../graphql/insertOneShipBuildsv2.gql');
const ReplaceBuildMutation = loader('../graphql/replaceOneShipBuildsv2.gql');
const UpdateBuildMutation = loader(
  '../graphql/updateRelatedOneShipBuildsv2.gql'
);

export const useShipBuildMutations = () => {
  return {
    addBuild: useAddBuild(),
    replaceBuild: useReplaceBuild(),
    updateVariants: useUpdateVariantBuilds(),
    updateRelated: useUpdateRelatedBuilds(),
  };
};

const useAddBuild = () => {
  const [addBuildMutation] = useMutation<{
    insertOneShipBuildsv2: IBuildInfoInsert;
  }>(AddBuildMutation);

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

const useUpdateRelatedBuilds = () => {
  const [updateBuildMutation] = useMutation(UpdateBuildMutation);

  const updateRelatedBuilds = async (id: string, relatedBuilds: string[]) => {
    const updatedBuild = await updateBuildMutation({
      variables: {
        build: {
          _id: id,
        },
        input: {
          related: relatedBuilds,
        },
      },
    });
    return updatedBuild;
  };
  return updateRelatedBuilds;
};

const useUpdateVariantBuilds = () => {
  const [updateBuildMutation] = useMutation(UpdateBuildMutation);

  const updateVariantBuilds = async (id: string, variantBuilds: string[]) => {
    const updatedBuild = await updateBuildMutation({
      variables: {
        build: {
          _id: id,
        },
        input: {
          variants: variantBuilds,
        },
      },
    });
    return updatedBuild;
  };
  return updateVariantBuilds;
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
