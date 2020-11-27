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

export const InfoGuides = () => {
  const classes = useStyles();
  return (
    <Paper id='guides' className={classes.paper}>
      <Typography variant='h4'>Guides</Typography>
      <Typography variant='subtitle1'>
        New Players look to the blue buttons for helpful tips in getting
        started.
      </Typography>
      <Button variant='outlined' color='secondary'>
        <div className={classes.specialButton}>
          <Typography>New Player Guide</Typography>
          <Typography variant='caption'>Created by Pixel Bandits</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='secondary'>
        <div className={classes.specialButton}>
          <Typography>USC Ship Builds List</Typography>
          <Typography variant='caption'>Created by Admiralfeb</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='secondary'>
        <div className={classes.specialButton}>
          <Typography>How to Explore</Typography>
          <Typography variant='caption'>Commander's Toolbox</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='secondary'>
        <div className={classes.specialButton}>
          <Typography>How to Mine</Typography>
          <Typography variant='caption'>Created by LocNor</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='secondary' disabled>
        <div className={classes.specialButton}>
          <Typography>How to Combat</Typography>
          <Typography variant='caption'>Coming Soon</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='secondary'>
        <div className={classes.specialButton}>
          <Typography>Ship Reviews</Typography>
          <Typography variant='caption'>USC</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='primary'>
        <div className={classes.specialButton}>
          <Typography>How to Unlock Engineers</Typography>
          <Typography variant='caption'>Commander's Toolbox</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='primary'>
        <div className={classes.specialButton}>
          <Typography>How to Unlock Guardian</Typography>
          <Typography variant='caption'>Commander's Toolbox</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='primary'>
        <div className={classes.specialButton}>
          <Typography>How to Grind Imperial Rank</Typography>
          <Typography variant='caption'>Commander's Toolbox</Typography>
        </div>
      </Button>
      <Button variant='outlined' color='primary'>
        <div className={classes.specialButton}>
          <Typography>How to Grind Federal Rank</Typography>
          <Typography variant='caption'>Commander's Toolbox</Typography>
        </div>
      </Button>
    </Paper>
  );
};
