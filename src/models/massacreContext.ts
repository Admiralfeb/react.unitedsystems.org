import { Dispatch, SetStateAction } from 'react';
import { IMassacreTrack } from './massacreTrack';

export interface IMassacreContext {
  trackers: IMassacreTrack[];
  addTracker: (newTracker: IMassacreTrack) => void;
  updateTracker: (index: number, newTracker: IMassacreTrack) => void;
  deleteTracker: (index: number) => void;
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<string>>;
}
