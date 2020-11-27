import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme } from './theme';
import { createBrowserHistory } from 'history';

import { Router } from 'react-router-dom';
import { NavbarComponent } from './navbar';
import { AppRoutes } from './app.routes';
import './app.css';

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='content'>
        <Router history={history}>
          <NavbarComponent />
          <AppRoutes />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
