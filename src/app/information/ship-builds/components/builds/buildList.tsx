import { useCallback, useEffect, useState } from 'react';
import { Loading } from '../../../../components';
import { filterShipBuilds } from '../../functions/filterShipBuilds';
import { sortItems } from '../../functions/sort';
import { useShipBuilds } from '../../hooks/useShipBuilds';
import { IBuildInfov2, IQuery } from '../../models';
import { BuildCard } from './buildCard';
import './buildList.css';

export const BuildList = (props: { buildQuery: IQuery | undefined }) => {
  const [queriedBuilds, setQueriedBuilds] = useState<IBuildInfov2[]>();
  const { buildQuery } = props;
  const { loading, shipBuilds } = useShipBuilds();

  let filterBuilds = useCallback(() => {
    if (loading) {
      return;
    }
    console.log(shipBuilds);
    const filtered = filterShipBuilds(shipBuilds, buildQuery);
    const sorted = sortItems(filtered!, 'shipId');
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
            <BuildCard key={(ship._id as unknown) as string} shipBuild={ship} />
          );
        })
      )}
    </div>
  );
};
