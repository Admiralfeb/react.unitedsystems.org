import { gql, useQuery } from '@apollo/client';
import { IFleetCarrier } from '../models/fleetCarrier';

export const useFleetCarriers = () => {
  const { data, loading, error } = useQuery<{ fleetCarriers: IFleetCarrier[] }>(
    gql`
      query AllFleetCarriers {
        fleetCarriers {
          id
          name
          owner
          purpose
        }
      }
    `
  );
  if (error) {
    throw new Error(`Failed to fetch carriers: ${error.message}`);
  }
  let fleetCarriers = data?.fleetCarriers;
  return { fleetCarriers, loading };
};
