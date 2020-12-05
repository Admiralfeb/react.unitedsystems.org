import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { IBuildInfo } from '../models';
import { BuildAdd } from './builds/buildAdd';
import { BuildDetail } from './builds/buildDetail';
import { QueryandBuildList } from './queryandBuildList';

export const USCBuildSystem = () => {
  const { path } = useRouteMatch();
  const [buildDetail, setBuildDetail] = useState<IBuildInfo>();

  useEffect(() => {
    if (buildDetail) {
    }
  }, [buildDetail]);

  return (
    <Switch>
      <Route path={`${path}/detail/:id`}>
        <BuildDetail />
      </Route>
      <Route path={path} exact>
        <QueryandBuildList setSelectedBuild={setBuildDetail} />
      </Route>
      <Route path={`${path}/add`}>
        <BuildAdd />
      </Route>
    </Switch>
  );
};
