import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme } from './theme';
import { createBrowserHistory } from 'history';

import { Router } from 'react-router-dom';
import { NavbarComponent } from './navbar';
import { AppRoutes } from './app.routes';
import './app.css';
import { RealmAppProvider } from './providers/realmAppProvider';
import { RealmApolloProvider } from './providers/realmApolloProvider';

const realmID: string = 'usc-tbmbi';

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <RealmAppProvider appId={realmID}>
      <RealmApolloProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <div className='content'>
            <Router history={history}>
              <NavbarComponent />
              <AppRoutes />
            </Router>
          </div>
        </ThemeProvider>
      </RealmApolloProvider>
    </RealmAppProvider>
  );
}

export default App;
