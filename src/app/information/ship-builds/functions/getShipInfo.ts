import shipMap from '../assets/shipMap.json';
import { IShipInfo } from '../models/shipInfo';

export const getShipInfofromID = (shipID: number): IShipInfo | undefined => {
    const ship: IShipInfo | undefined = shipMap.find(x => x.id === shipID);
    return ship;
}
export const getShipInfofromName = (shipName: string): IShipInfo | undefined => {
    const ship: IShipInfo | undefined = shipMap.find(x => x.name.toLowerCase() === shipName.toLowerCase());
    return ship;
}
