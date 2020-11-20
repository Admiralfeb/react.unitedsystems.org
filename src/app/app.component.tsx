import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme } from './theme';

import { Init } from './components/init.component';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Init />
    </ThemeProvider>
  );
}

export default App;
