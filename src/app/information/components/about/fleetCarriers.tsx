import React from 'react';
import { UnderConstruction } from '../../../components/underConstruction';
import { useFleetCarriers } from '../../hooks/useFleetCarriers';

export const FleetCarriers = () => {
  const carriers = useFleetCarriers();

  return <UnderConstruction title='USC Fleet Carriers' />;
};
