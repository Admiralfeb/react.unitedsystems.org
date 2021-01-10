import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './theme';
import { createBrowserHistory } from 'history';

import { Router } from 'react-router-dom';
import { NavbarComponent } from 'components/navbar';
import { AppRoutes } from 'routes/app.routes';
import { RealmAppProvider, RealmApolloProvider } from 'providers';
import { SnackbarProvider } from 'notistack';
import { Footer } from 'components';

const realmID: string | undefined = process.env.REACT_APP_REALM_ID;

export const App = () => {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <Router history={history}>
      <RealmAppProvider appId={realmID}>
        <RealmApolloProvider>
          <SnackbarProvider maxSnack={3}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div>
                <NavbarComponent />
                <Footer>
                  <AppRoutes />
                </Footer>
              </div>
            </ThemeProvider>
          </SnackbarProvider>
        </RealmApolloProvider>
      </RealmAppProvider>
    </Router>
  );
};
