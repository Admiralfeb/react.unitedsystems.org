import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Loading } from '../components';
import { BuildAdd } from './components/builds/buildAdd';
import { BuildDetail } from './components/builds/buildDetail';
import { QueryandBuildList } from './components/queryandBuildList';
import { useShipBuilds } from './hooks/useShipBuilds';

export const USCBuildSystem = () => {
  const { path } = useRouteMatch();
  const { loading } = useShipBuilds();

  if (loading) {
    return <Loading />;
  }

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
