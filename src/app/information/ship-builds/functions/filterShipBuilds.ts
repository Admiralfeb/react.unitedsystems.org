import { IBuildInfo, IQuery } from '../models';

export const filterShipBuilds = (
  shipBuilds: IBuildInfo[] | undefined,
  query: IQuery | undefined
) => {
  if (shipBuilds && query) {
    let newList = shipBuilds;
    // ship type
    if (query.ship !== null) {
      newList = newList.filter((build) => build.ship === query.ship);
    }
    // ship size
    if (query.size !== null) {
      newList = newList.filter((build) => build.size === query.size);
    }
    // Engineering
    if (query.engLevel !== null) {
      newList = newList.filter((build) => build.engLevel === query.engLevel);
    }
    // Specializations
    if (query.specialties.length > 0) {
      console.log(query.specialties);
      let tempList: IBuildInfo[] = [];
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
      newList = newList.filter((build) => build.guardian === val);
    }
    // PowerPlay
    if (query.other.powerplay !== null) {
      const val = query.other.powerplay === 1 ? true : false;
      newList = newList.filter((build) => build.powerplay === val);
    }
    // Beginner
    if (query.other.beginner !== null) {
      const val = query.other.beginner === 1 ? true : false;
      newList = newList.filter((build) => build.beginner === val);
    }
    return newList;
  }
};
