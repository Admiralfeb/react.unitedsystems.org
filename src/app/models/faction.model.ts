export interface Welcome {
    id: number;
    id64: number;
    name: string;
    url: string;
    controllingFaction: ControllingFaction;
    factions: Faction[];
}

export interface ControllingFaction {
    id: number;
    name: string;
    allegiance: string;
    government: string;
}

export interface Faction {
    id: number;
    name: string;
    allegiance: string;
    government: string;
    influence: number;
    state: string;
    activeStates: ActiveState[];
    recoveringStates: any[];
    pendingStates: any[];
    happiness: string;
    isPlayer: boolean;
    lastUpdate: number;
}

export interface ActiveState {
    state: string;
}
