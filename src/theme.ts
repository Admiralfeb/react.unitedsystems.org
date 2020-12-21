import { createMuiTheme } from '@material-ui/core';
import backgroundImg from 'assets/background.png';

const theme = createMuiTheme({
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

theme.overrides = {
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
      color: theme.palette.primary.main,
    },
  },
  MuiButton: {
    root: {
      textTransform: 'initial',
    },
  },
};

export { theme };
