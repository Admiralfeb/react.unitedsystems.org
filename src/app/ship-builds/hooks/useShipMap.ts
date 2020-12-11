import Ships from '../assets/shipMap.json';
import { IShipInfo } from '../models';

export const useShipMap = () => {
  const ships: IShipInfo[] = Ships;
  return ships;
};

export const useShipIdfromMap = (shipId: string | undefined) => {
  if (shipId) {
    const ships: IShipInfo[] = Ships;
    const ship = ships.find((x) => x.shipId === shipId);
    return ship;
  }
  return undefined;
};
