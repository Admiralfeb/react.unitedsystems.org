import React, { useEffect, useState } from 'react';
import { filterShipBuilds } from '../functions/filterShipBuilds';
import { getShipBuilds } from '../functions/getShipBuilds';
import { IBuildInfo, IQuery } from '../models';
import { BuildItem } from './buildItem';
import './builds.css';

export const Builds = (props: { buildQuery: IQuery | undefined }) => {
  const [builds, setBuilds] = useState<IBuildInfo[]>();
  const [queriedBuilds, setQueriedBuilds] = useState<IBuildInfo[]>();
  const { buildQuery } = props;

  useEffect(() => {
    setBuilds(getShipBuilds());
  }, []);

  useEffect(() => {
    setQueriedBuilds(filterShipBuilds(builds, buildQuery));
  }, [builds, buildQuery]);

  return (
    <div className='builds'>
      {queriedBuilds?.map((ship) => {
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
      })}
    </div>
  );
};
