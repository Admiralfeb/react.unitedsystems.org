import { createMuiTheme } from '@material-ui/core';

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f07b05',
    },
    secondary: {
      main: '#00B3F7',
    },
    type: 'dark',
  },

});

darkTheme.overrides = {
  MuiLink: {
    root: {
      color: darkTheme.palette.primary.main,
    }
  },
  MuiButton: {
    root: {
      textTransform: 'initial'
    }
  }
}
