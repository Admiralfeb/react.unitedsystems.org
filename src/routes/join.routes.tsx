import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { JoinList, JoinNew } from 'components/join';
import { NotFound } from 'components';

export const JoinRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} exact>
        <JoinNew />
      </Route>
      {/* <Route path={`${path}/joinNew`}>
        <JoinNew />
      </Route> */}
      <Route path={`${path}/joinListforHC`}>
        <JoinList />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
