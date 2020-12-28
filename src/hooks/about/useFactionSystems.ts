import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const FactionSystems = loader('../../graphql/allFactionSystems.gql');

export const useFactionSystems = () => {
  const { data, loading, error } = useQuery<{
    factionSystems: { text: string; link: string }[];
  }>(FactionSystems);
  const factionSystems = data?.factionSystems ?? [];

  return { factionSystems, loading, error };
};
