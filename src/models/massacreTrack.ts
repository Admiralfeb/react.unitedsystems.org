export type IMassacreTrack = {
  hazRezSystem: string;
  systemsin10LY: {
    name: string;
    factions: {
      name: string;
      id: number;
      influence: number;
      removed: boolean;
    }[];
    stations: {
      type: string;
      name: string;
      distance: number;
    }[];
  }[];
  factions: {
    name: string;
    id: number;
    removed: boolean;
    missions: Array<IFactionMission | null>;
  }[];
  current: boolean;
};

export interface IFactionMission {
  timeStamp: Date;
  killsforMission: number;
  killsCompleted: number;
}
