import { useQuery } from '@apollo/client';
import { IBuildInfov2 } from '../models';
import { loader } from 'graphql.macro';
import { useShipBuildMutations } from './useShipBuildMutations';
import { IBuildInfoInsert } from '../models/buildInfoInsert';

const AllShipBuildsv2s = loader('../graphql/allShipBuildsv2s.gql');

export const useShipBuilds = () => {
  const { shipBuilds, loading } = useAllShipBuilds();
  const { addBuild, replaceBuild } = useShipBuildMutations();
  return {
    loading,
    shipBuilds,
    addBuild,
    addRelated: useAddRelatedBuild(),
    addVariant: useAddVariantBuild(),
    replaceBuild,
  };
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

const useAddRelatedBuild = () => {
  const { addBuild, updateRelated } = useShipBuildMutations();
  const addRelatedBuild = async (
    currentID: string,
    relatedBuilds: string[],
    shipBuilds: IBuildInfov2[],
    buildtoInsert: IBuildInfoInsert
  ) => {
    const tempBuild = buildtoInsert;
    tempBuild.related = relatedBuilds;
    const addedBuild = (await addBuild(tempBuild)).data;
    const buildID = (addedBuild?._id as unknown) as string;
    if (buildID) {
      await updateRelated(currentID, [...relatedBuilds, buildID]);
      for (const id of relatedBuilds) {
        const build = shipBuilds.find(
          (x) => ((x._id as unknown) as string) === id
        );
        if (build) {
          const newRelated = [...build.related, buildID];
          await updateRelated((build._id as unknown) as string, newRelated);
        }
      }
    }
  };
  return addRelatedBuild;
};

const useAddVariantBuild = () => {
  const { addBuild, updateVariants, updateRelated } = useShipBuildMutations();
  const addVariantBuild = async (
    parentID: string,
    variantBuilds: string[],
    shipBuilds: IBuildInfov2[],
    buildtoInsert: IBuildInfoInsert
  ) => {
    const tempBuild = buildtoInsert;
    tempBuild.isVariant = true;
    tempBuild.related = variantBuilds;
    const addedBuild = (await addBuild(tempBuild)).data;
    const buildID = (addedBuild?._id as unknown) as string;
    if (buildID) {
      await updateVariants(parentID, [...variantBuilds, buildID]);
      for (const id of variantBuilds) {
        const build = shipBuilds.find(
          (x) => ((x._id as unknown) as string) === id
        );
        if (build) {
          const newRelated = [...build.related, buildID];
          await updateRelated((build._id as unknown) as string, newRelated);
        }
      }
    }
  };
  return addVariantBuild;
};
