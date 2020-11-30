import React, { useEffect, useState } from 'react';
import { Loading } from '../../../components';
import { filterShipBuilds } from '../functions/filterShipBuilds';
import { useShipBuilds } from '../graphql/useShipBuilds';
import { IBuildInfo, IQuery } from '../models';
import { BuildItem } from './buildItem';
import './builds.css';

export const Builds = (props: { buildQuery: IQuery | undefined }) => {
  const [queriedBuilds, setQueriedBuilds] = useState<IBuildInfo[]>();
  const { buildQuery } = props;
  const { loading, shipBuilds } = useShipBuilds();

  useEffect(() => {
    if (!loading) {
      setQueriedBuilds(filterShipBuilds(shipBuilds, buildQuery));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, buildQuery]);

  return (
    <div className='builds'>
      {loading ? (
        <Loading />
      ) : (
        queriedBuilds?.map((ship) => {
          return (
            <BuildItem
              key={ship.id}
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
