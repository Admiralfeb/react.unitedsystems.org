import carriers from '../assets/fcs.json';
import { IFleetCarrier } from '../models/fleetCarrier';

export const useFleetCarriers = () => {
    const fleetcarriers: IFleetCarrier[] = carriers;
    return fleetcarriers;
}
