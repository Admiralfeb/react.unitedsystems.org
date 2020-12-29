import { BehaviorSubject } from 'rxjs';
import { ISphereSystem } from '../models';
import { IPossibility } from '../models/possibility.model';
import { getBodiesinSystem, getFactionsinSystem, getSystemsinSphere } from './';

const possibilityProgress = new BehaviorSubject('');

const getPossibilities = async (
  systemName: string = 'Arugbal',
  range: number = 50
) => {
  possibilityProgress.next('Retrieving Systems');
  let systemList = await getSystemsinSphere(systemName, range);
  systemList = systemList.filter(
    (v) => Object.keys(v.information).length !== 0
  );

  possibilityProgress.next(
    `Retrieving Body Information for ${systemList.length} systems`
  );
  systemList = await getSystemswithRings(systemList);

  possibilityProgress.next(
    `Retrieving Faction Information for ${systemList.length} systems`
  );
  systemList = await getSystemswithAnarchyFaction(systemList);

  const possibilities = await finalizePossibilities(systemList);

  console.log({ possibilities });
  possibilityProgress.next(
    `Process complete: ${possibilities.length} Possible Systems`
  );
};

const getSystemswithRings = async (systemList: ISphereSystem[]) => {
  let hasRingsList: ISphereSystem[] = [];
  for (const system of systemList) {
    const systemBodyList = await getBodiesinSystem(system.name);
    const systemBodies = systemBodyList.bodies;
    const bodieswithRings = systemBodies.filter((v) => v.rings);
    if (bodieswithRings.length > 0) {
      hasRingsList = [...hasRingsList, system];
    }
  }
  return hasRingsList;
};

const getSystemswithAnarchyFaction = async (systemList: ISphereSystem[]) => {
  let hasAnarchyList: ISphereSystem[] = [];
  for (const system of systemList) {
    const systemFactionInfo = await getFactionsinSystem(system.name);
    if (systemFactionInfo.factions?.length > 0) {
      for (const faction of systemFactionInfo.factions) {
        if (faction.government.toLowerCase() === 'anarchy') {
          hasAnarchyList = [...hasAnarchyList, system];
        }
      }
    }
  }
  return hasAnarchyList;
};

const finalizePossibilities = async (systemList: ISphereSystem[]) => {
  let possibilities: IPossibility[] = [];
  for (let i = 0; i < systemList.length; i++) {
    const system = systemList[i];
    possibilityProgress.next(
      `Checking for populated systems. ${i} of ${systemList.length}. System: ${system.name}`
    );
    const closeSystems = await getPopulatedSystemswithin10LY(system);
    if (closeSystems.length > 0) {
      const sysName = system.name;
      const dis = system.distance;
      const closeSys = closeSystems.map((v) => v.name);
      possibilities = [
        ...possibilities,
        { systemName: sysName, distance: dis, missionSystems: closeSys },
      ];
    }
  }
  return possibilities;
};

const getPopulatedSystemswithin10LY = async (system: ISphereSystem) => {
  let closeSystems: ISphereSystem[] = await getSystemsinSphere(system.name, 10);
  closeSystems = closeSystems.filter(
    (v) => Object.keys(v.information).length !== 0
  );
  closeSystems = closeSystems.filter((v) => v.information.population > 100);
  return closeSystems;
};

export { getPossibilities, possibilityProgress };
