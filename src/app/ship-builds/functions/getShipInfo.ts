import shipMap from '../assets/shipMap.json';
import { IShipInfo } from '../models/shipInfo';

export const getShipInfo = (shipID: number): IShipInfo | undefined => {
    const ship: IShipInfo | undefined = shipMap.find(x => x.id === shipID);
    return ship;
}
