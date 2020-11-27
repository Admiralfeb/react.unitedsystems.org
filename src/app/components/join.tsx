import { Link, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
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
});

export const Join = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.header}>
        Instructions to Join:
      </Typography>
      <Paper className={classes.paper}>
        <Typography>
          Step 1: Read the rules on the{' '}
          <Link to='/about' target='_blank' component={NavLink}>
            About Page
          </Link>
          .
        </Typography>
        <Typography>Step 2: Fill out the form below</Typography>
        <iframe
          className={classes.iframe}
          title='USC Application Form'
          id='joinFormContainer'
          src='https://docs.google.com/forms/d/e/1FAIpQLSfw7vIL8FY8ZGTF8YFjn3x-zGdhP5k9J6JALXAjXA7_Mm3-Rw/viewform?embedded=true'>
          Loading…
        </iframe>
        <Typography>Step 3: Join Discord</Typography>
        <iframe
          className={classes.iframe}
          title='Discord Widget'
          id='embeddedDiscord'
          src='https://discord.com/widget?id=662439414152167434&amp;theme=dark'
          allowTransparency
          frameBorder='0'
          sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'></iframe>
      </Paper>
    </div>
  );
};
