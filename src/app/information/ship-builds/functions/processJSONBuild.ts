import { ICoriolisLoadout } from '../models/coriolis';

export const processJSONBuild = (
    json: string
): {
    buildName: string;
    shipName: string;
    guardian: boolean;
    powerplay: boolean;
    engineering: boolean;
    url: string;
} => {
    const build: ICoriolisLoadout = JSON.parse(json);

    const buildName = build.name;
    const shipName = build.ship;
    const url = build.references[0].url ?? '';
    let guardian = false;
    let powerplay = false;
    let engineering = false;

    const components = build.components;
    const core = components.standard;
    const hardpoints = components.hardpoints;
    const internals = components.internal;

    // Check for Guardian
    const ppName = (core.powerPlant.name as string) ?? '';
    const pdName = (core.powerDistributor.name as string) ?? '';
    const guardianHardPoints = hardpoints.find((x) =>
        x?.group.toLowerCase().startsWith('guardian')
    );
    const guardianInternals = internals.find((x) =>
        x?.group.toLowerCase().startsWith('guardian')
    );
    if (
        guardian === false &&
        (ppName.toLowerCase().startsWith('guardian') ||
            pdName.toLowerCase().startsWith('guardian') ||
            guardianHardPoints ||
            guardianInternals)
    ) {
        guardian = true;
    }

    // Check for PowerPlay
    const powerplayWeaponNames = [
        'disruptor',
        'imperial hammer',
        'pack-hound',
        'mining lance',
        'enforcer',
        'cytoscrambler',
        'retributor',
        'advanced plasma accelerator',
        'pacifier',
        'rocket propelled fsd disruptor',
    ];
    const powerplayInternals = internals.find((x) =>
        x?.group.toLowerCase().startsWith('prismatic')
    );
    if (powerplay === false && powerplayInternals) {
        powerplay = true;
    }
    powerplayWeaponNames.forEach((x) => {
        if (powerplay === false) {
            const powerplayHardpoint = hardpoints.find(
                (hp) => hp?.name?.toLowerCase() === x.toLowerCase()
            );
            powerplay = powerplayHardpoint ? true : false;
        }
    });

    // Check for engineering
    const weaponEng = hardpoints.filter((hp) => hp?.blueprint);
    const internalEng = internals.filter((i) => i?.blueprint);
    const ppEng = core.powerPlant.blueprint;
    const thrustEng = core.thrusters.blueprint;
    const fsdEng = core.frameShiftDrive.blueprint;
    const lifeEng = core.lifeSupport.blueprint;
    const pdEng = core.powerDistributor.blueprint;
    const sensorEng = core.sensors.blueprint;
    if (
        engineering === false &&
        (weaponEng.length > 0 ||
            internalEng.length > 0 ||
            ppEng ||
            thrustEng ||
            fsdEng ||
            lifeEng ||
            pdEng ||
            sensorEng)
    ) {
        engineering = true;
    }

    return { buildName, shipName, guardian, powerplay, engineering, url };
};
