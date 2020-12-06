import { IBuildInfov2, IQuery } from '../models';
import { getShipInfofromID } from './getShipInfo';

export const filterShipBuilds = (
  shipBuilds: IBuildInfov2[] | undefined,
  query: IQuery | undefined
) => {
  if (shipBuilds && query) {
    let newList = shipBuilds.filter((x) => x.isVariant === false);
    // ship type
    if (query.ship !== null) {
      newList = newList.filter((build) => build.shipId === query.ship);
    }
    // ship size
    if (query.size !== null) {
      newList = newList.filter((build) => {
        const shipInfo = getShipInfofromID(build.shipId);
        if (shipInfo?.size === query.size) {
          return build;
        } else {
          return undefined;
        }
      });
    }
    // Engineering
    if (query.engLevel !== null) {
      newList = newList.filter((build) => build.engLevel === query.engLevel);
    }
    // Specializations
    if (query.specialties.length > 0) {
      console.log(query.specialties);
      let tempList: IBuildInfov2[] = [];
      for (const specialty of query.specialties) {
        if (tempList.length > 0) {
          tempList = tempList.filter((build) =>
            build.specializations.includes(specialty)
          );
        } else {
          tempList = newList.filter((build) =>
            build.specializations.includes(specialty)
          );
        }
      }
      newList = tempList;
    }
    // Guardian
    if (query.other.guardian !== null) {
      const val = query.other.guardian === 1 ? true : false;
      newList = newList.filter((build) => build.hasGuardian === val);
    }
    // PowerPlay
    if (query.other.powerplay !== null) {
      const val = query.other.powerplay === 1 ? true : false;
      newList = newList.filter((build) => build.hasPowerplay === val);
    }
    // Beginner
    if (query.other.beginner !== null) {
      const val = query.other.beginner === 1 ? true : false;
      newList = newList.filter((build) => build.isBeginner === val);
    }
    return newList;
  }
};
