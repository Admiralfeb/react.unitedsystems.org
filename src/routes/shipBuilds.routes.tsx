import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { EDSpinner } from '@admiralfeb/react-components';
import {
  QueryandBuildList,
  BuildAdd,
  BuildDetail,
} from 'components/shipBuilds';
import { useShipBuilds } from 'hooks/shipBuilds/useShipBuilds';

export const ShipBuildSystemRoutes = () => {
  const { path } = useRouteMatch();
  const { loading } = useShipBuilds();

  if (loading) {
    return <EDSpinner />;
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
