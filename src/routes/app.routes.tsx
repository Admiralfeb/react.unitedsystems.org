import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Join, NotFound } from 'components';
import { InformationRoutes } from './information.routes';

export const AppRoutes = () => {
  return (
    <Switch>
      <Redirect from="/" to="/home" exact />
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/join">
        <Join />
      </Route>
      <Route path="/information">
        <InformationRoutes />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
