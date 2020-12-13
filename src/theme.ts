import { createMuiTheme } from '@material-ui/core';
import backgroundImg from 'assets/USC background pic.png';

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
  MuiCssBaseline: {
    '@global': {
      body: {
        height: '100%',
        backgroundImage: `url("${backgroundImg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      },
    },
  },
  MuiLink: {
    root: {
      color: darkTheme.palette.primary.main,
    },
  },
  MuiButton: {
    root: {
      textTransform: 'initial',
    },
  },
};
