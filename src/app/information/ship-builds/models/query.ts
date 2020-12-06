import { ShipSize } from '.';
import { OtherFilters } from './otherFilters';
export interface IQuery {
  ship: string | null;
  size: ShipSize | null;
  specialties: string[];
  engLevel: number | null;
  other: OtherFilters;
}
