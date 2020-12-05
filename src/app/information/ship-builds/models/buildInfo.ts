import { ShipSize } from './shipSize';
import { ObjectId } from 'bson';

export interface IBuildInfo {
  _id: ObjectId;
  ship?: number;
  size?: number | ShipSize;
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
