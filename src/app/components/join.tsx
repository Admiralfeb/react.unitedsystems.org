import {
  Link,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  header: {
    textAlign: 'center',
  },
  paper: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
  },
  iframe: {
    width: '100%',
    height: '59vw',
  },
  step: {
    display: 'grid',
    gridTemplate: '1fr / 1fr 1fr',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
});

export const Join = () => {
  const classes = useStyles();
  const mediaQuery = useMediaQuery('(min-width:950px)');
  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.header}>
        Join Us!
      </Typography>
      <Paper className={classes.paper}>
        <Typography>
          Step 1: Read the rules on the{' '}
          <Link to='/about' target='_blank' component={NavLink}>
            About Page
          </Link>
          .
        </Typography>
        {mediaQuery ? (
          <Typography>Step 2: Fill out the form below</Typography>
        ) : (
          <Typography>
            Step 2: Fill out the{' '}
            <Link
              href='https://docs.google.com/forms/d/e/1FAIpQLSfw7vIL8FY8ZGTF8YFjn3x-zGdhP5k9J6JALXAjXA7_Mm3-Rw/viewform?usp=sf_link'
              target='_blank'>
              USC Join Form
            </Link>
          </Typography>
        )}

        <Typography>
          Step 3: Join our{' '}
          <Link href='https://discord.gg/br8Fy2M6cv' target='_blank'>
            Discord
          </Link>
        </Typography>

        <Typography>
          Recommended: Find us in-game! (UCPC for PC | UCXB for Xbox | UCPS for
          PlayStation)
        </Typography>
        <Typography>
          Recommended: Join our{' '}
          <Link href='https://inara.cz/squadron/7028/' target='_blank'>
            Inara Squadron
          </Link>
        </Typography>
        {mediaQuery && (
          <iframe
            className={classes.iframe}
            title='USC Application Form'
            id='joinFormContainer'
            src='https://docs.google.com/forms/d/e/1FAIpQLSfw7vIL8FY8ZGTF8YFjn3x-zGdhP5k9J6JALXAjXA7_Mm3-Rw/viewform?embedded=true'>
            Loading…
          </iframe>
        )}
        {/* <iframe
          className={classes.iframe}
          title='Discord Widget'
          id='embeddedDiscord'
          src='https://discord.com/widget?id=662439414152167434&amp;theme=dark'
          allowTransparency
          frameBorder='0'
          sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'></iframe> */}
      </Paper>
    </div>
  );
};
