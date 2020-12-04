import { ShipSize } from './shipSize';

export interface IBuildInfo {
  _id?: string;
  id: number;
  ship: number;
  size: number | ShipSize;
  author: string;
  specializations: string[];
  engLevel: number;
  description: string;
  buildLink: string;
  guardian: boolean;
  powerplay: boolean;
  beginner: boolean;
  moreInfo?: string;
}
