import { useMutation, useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { IJoinInfo } from 'models/join/joinInfo';
import { useMemo } from 'react';

const AllJoiners = loader('../../graphql/allJoiners.gql');
const AddJoiner = loader('../../graphql/insertOneJoiner.gql');

export const useJoinInfo = () => {
  const { allJoiners, loading, error } = useAllJoinInfo();
  console.log(allJoiners);

  const joiners = useMemo(() => {
    if (loading || error) {
      return undefined;
    }
    return allJoiners.filter((x) => x.type === 'join');
  }, [allJoiners, loading, error]);
  const guests = useMemo(() => {
    if (loading || error) {
      return undefined;
    }
    return allJoiners.filter((x) => x.type === 'guest');
  }, [allJoiners, loading, error]);
  const ambassadors = useMemo(() => {
    if (loading || error) {
      return undefined;
    }
    return allJoiners.filter((x) => x.type === 'ambassador');
  }, [allJoiners, loading, error]);

  return { joiners, guests, ambassadors, loading, error };
};

export const useAllJoinInfo = () => {
  const { data, loading, error } = useQuery<{ joiners: IJoinInfo[] }>(
    AllJoiners
  );
  const allJoiners = data?.joiners ?? [];

  return { allJoiners, loading, error };
};

export const useAddJoinInfo = () => {
  const [addJoinerMutation] = useMutation<{ insertOneJoiner: IJoinInfo }>(
    AddJoiner
  );

  const addJoiner = async (joiner: IJoinInfo) => {
    try {
      const addedJoiner = await addJoinerMutation({
        variables: {
          joiner: {
            ...joiner,
          },
        },
      });
      return addedJoiner;
    } catch (e) {
      throw new Error(`Unable to add. ${e.message}`);
    }
  };

  return addJoiner;
};
