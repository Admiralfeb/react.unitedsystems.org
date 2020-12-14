import { useQuery } from '@apollo/client';
import { sortItems } from 'functions/sort';
import { loader } from 'graphql.macro';
import { IFleetCarrier } from 'models/information/fleetCarrier';
import { useMemo } from 'react';

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

export const usePersonalCarriers = (
  fleetCarriers: IFleetCarrier[] | undefined
) => {
  return useMemo(() => {
    if (fleetCarriers) {
      const personalCarriers = fleetCarriers.filter((x) =>
        x.purpose.toLowerCase().includes('personal')
      );
      return sortItems(personalCarriers, 'name');
    } else {
      return undefined;
    }
  }, [fleetCarriers]);
};

export const useSquadCarriers = (
  fleetCarriers: IFleetCarrier[] | undefined
) => {
  return useMemo(() => {
    if (fleetCarriers) {
      const personalCarriers = fleetCarriers.filter(
        (x) => !x.purpose.toLowerCase().includes('personal')
      );
      return sortItems(personalCarriers, 'name');
    } else {
      return undefined;
    }
  }, [fleetCarriers]);
};
