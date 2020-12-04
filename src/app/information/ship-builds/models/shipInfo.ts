import { ShipSize } from '.';

export interface IShipInfo {
  /** id of the ship. Used to determine other info */
  id: number;
  name: string;
  size: ShipSize;
  requires?: string;
  shipImg: string;
}
