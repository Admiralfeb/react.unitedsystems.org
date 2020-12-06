import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { BuildAdd } from './builds/buildAdd';
import { BuildDetail } from './builds/buildDetail';
import { QueryandBuildList } from './queryandBuildList';

export const USCBuildSystem = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/detail/:id`}>
        <BuildDetail />
      </Route>
      <Route path={path} exact>
        <QueryandBuildList />
      </Route>
      <Route path={`${path}/add`}>
        <BuildAdd />
      </Route>
    </Switch>
  );
};
