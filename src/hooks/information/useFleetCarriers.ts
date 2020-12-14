import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { IFleetCarrier } from 'models/information/fleetCarrier';

const FleetCarriers = loader('../../graphql/allFleetCarriers.gql');

export const useFleetCarriers = () => {
  const { data, loading, error } = useQuery<{ fleetCarriers: IFleetCarrier[] }>(
    FleetCarriers
  );
  if (error) {
    throw new Error(`Failed to fetch carriers: ${error.message}`);
  }
  let fleetCarriers = data?.fleetCarriers;
  return { fleetCarriers, loading };
};
