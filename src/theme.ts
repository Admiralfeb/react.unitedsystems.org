import { createMuiTheme } from '@material-ui/core';
// import backgroundImg from 'assets/background.png';
import background2021_1 from 'assets/img/usc-raz-2021-Jan.png';
// import fireworksImg from 'assets/new-year-eve-fireworks.jpg';
import euroStileWoff from 'assets/fonts/Eurostile-Roman.woff2';

const euroStile = {
  fontFamily: 'Eurostile',
  fontStyle: 'normal',
  src: `url(${euroStileWoff}) format('woff2')`,
};

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
  typography: {
    fontFamily: [
      'Eurostile',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
  },
});

theme.overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        height: '100%',
        backgroundImage: `url("${background2021_1}")`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      },
      '@font-face': [euroStile],
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
