import { useCallback, useEffect, useState } from 'react';
import { Loading } from '../../../components';
import { filterShipBuilds } from '../functions/filterShipBuilds';
import { getShipInfofromID } from '../functions/getShipInfo';
import { sortItems } from '../functions/sort';
import { useShipBuilds } from '../hooks/useShipBuilds';
import { IBuildInfo, IQuery } from '../models';
import { BuildItem } from './buildItem';
import './builds.css';

export const Builds = (props: { buildQuery: IQuery | undefined }) => {
  const [queriedBuilds, setQueriedBuilds] = useState<IBuildInfo[]>();
  const { buildQuery } = props;
  const { loading, shipBuilds } = useShipBuilds();

  let filterBuilds = useCallback(() => {
    if (loading) {
      return;
    }
    const mappedBuilds = shipBuilds?.map((v) => {
      const shipInfo = getShipInfofromID(v.ship)!;
      const size = shipInfo?.size;
      const newBuild: IBuildInfo = { ...v, size };
      return newBuild;
    });

    const filtered = filterShipBuilds(mappedBuilds, buildQuery);
    const sorted = sortItems(filtered!, 'ship');
    setQueriedBuilds(sorted);
  }, [loading, shipBuilds, buildQuery]);

  useEffect(() => {
    if (loading) {
      return;
    }
    filterBuilds();
  }, [loading, filterBuilds]);

  return (
    <div className="builds">
      {loading ? (
        <Loading />
      ) : (
        queriedBuilds?.map((ship) => {
          return (
            <BuildItem
              key={ship._id}
              id={ship.ship}
              author={ship.author}
              specializations={ship.specializations}
              engLevel={ship.engLevel}
              description={ship.description}
              buildLink={ship.buildLink}
              guardian={ship.guardian}
              powerplay={ship.powerplay}
              beginner={ship.beginner}
              moreInfo={ship.moreInfo}
            />
          );
        })
      )}
    </div>
  );
};
