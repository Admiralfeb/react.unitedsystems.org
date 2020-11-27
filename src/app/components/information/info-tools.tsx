import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  paper: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
  },
  specialButton: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const InfoTools = () => {
  const classes = useStyles();
  return (
    <Paper id='tools' className={classes.paper}>
      <Typography variant='h4'>Tools</Typography>
      <Typography variant='subtitle1'>
        New Players look to the blue buttons for helpful tips in getting
        started.
      </Typography>
      <Button variant='outlined' color='secondary'>
        <div className={classes.specialButton}>
          <Typography>Ship Builder</Typography>
          <Typography variant='caption'>Coriolis</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='secondary'>
        <div className={classes.specialButton}>
          <Typography>Inara Companion App</Typography>
          <Typography variant='caption'>Helpful 3rd party tool</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='secondary'>
        <div className={classes.specialButton}>
          <Typography>Miner's Tool</Typography>
          <Typography variant='caption'>Created by CMDR VicTic</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='secondary'>
        <div className={classes.specialButton}>
          <Typography>Ship Anatomy</Typography>
          <Typography variant='caption'>a.teall.info</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='primary'>
        <div className={classes.specialButton}>
          <Typography>Massacre Mission Tracker</Typography>
          <Typography variant='caption'>Created by Clever Ape</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='primary'>
        <div className={classes.specialButton}>
          <Typography>Material Finder</Typography>
          <Typography variant='caption'>EDTutorials</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='primary'>
        <div className={classes.specialButton}>
          <Typography>Neutron Star Plotter</Typography>
          <Typography variant='caption'>Created by Gareth Harper</Typography>
        </div>
      </Button>
      <Button
        variant='outlined'
        color='primary'
        href='https://www.edsm.net/en/galactic-routes/show/id/291/name/The+Hurt+Highway'
        target='_blank'>
        <div className={classes.specialButton}>
          <Typography>The Hurt Highway</Typography>
          <Typography variant='caption'>Created by EXO</Typography>
        </div>
      </Button>
      <Button
        variant='outlined'
        color='primary'
        href='https://www.edsm.net/en/galactic-routes/show/id/291/name/The+Hurt+Highway'
        target='_blank'>
        <div className={classes.specialButton}>
          <Typography>EDDB Companion App</Typography>
          <Typography variant='caption'>Alternative to Inara</Typography>
        </div>
      </Button>
      <Button
        variant='outlined'
        color='primary'
        href='https://www.edsm.net/en/galactic-routes/show/id/291/name/The+Hurt+Highway'
        target='_blank'>
        <div className={classes.specialButton}>
          <Typography>Elite Dangerous Star Map</Typography>
          <Typography variant='caption'>Also known as EDSM</Typography>
        </div>
      </Button>
    </Paper>
  );
};
