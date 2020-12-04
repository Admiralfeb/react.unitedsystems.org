import Ships from '../assets/shipMap.json';
import { IShipInfo } from '../models';

export const useShips = () => {
  const ships: IShipInfo[] = Ships;
  return ships;
};
