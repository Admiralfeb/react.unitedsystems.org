export type IMassacreTrack = {
  hazRezSystem: string;
  systemsin10LY: {
    name: string;
    id: string;
    factions: {
      name: string;
      id: string;
      influence: number;
      removed: boolean;
    }[];
    stations: {
      type: string;
      name: string;
      distance: number;
      removed: boolean;
    }[];
    removed: boolean;
  }[];
  factions: {
    name: string;
    id: string;
    removed: boolean;
    missions: (number | null)[];
  }[];
  current: boolean;
};
