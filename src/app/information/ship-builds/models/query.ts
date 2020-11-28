import { ShipSize } from '.';
import { OtherFilters } from './otherFilters';
export interface IQuery {
    ship: number | null;
    size: ShipSize | null;
    specialties: string[];
    engLevel: number | null;
    other: OtherFilters;
}
