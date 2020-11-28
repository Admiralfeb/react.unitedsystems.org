import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../infoStyles';

export const InfoDocs = () => {
  const classes = useStyles();
  return (
    <Paper id='documentation' className={classes.paper}>
      <Typography variant='h4'>Documentation</Typography>
      <div className={classes.flex}>
        <Button
          variant='outlined'
          color='primary'
          href='https://docs.google.com/document/d/1loy4TRNhM07Azf_ib01OIurujTcNX-L1Y1NYFy59i4M/edit?usp=sharing'
          target='_blank'>
          <div className={classes.specialButton}>
            <Typography>Anti-Thargoid Flight Manual</Typography>
            <Typography variant='caption'>Created by Aterius</Typography>
          </div>
        </Button>
        <Button
          variant='outlined'
          color='primary'
          href='https://docs.google.com/spreadsheets/d/1cWCUSxvliZ3ly-RRulUeYqZ3hqOyCSRLze0KS1QBiBY/edit?usp=sharing'
          target='_blank'>
          <div className={classes.specialButton}>
            <Typography>Supercruise Ship Handling</Typography>
            <Typography variant='caption'>Created by CMDR marx</Typography>
          </div>
        </Button>
        <Button
          variant='outlined'
          color='primary'
          href='https://docs.google.com/spreadsheets/d/1wTmKrzLCXRIdHwKHaN-gXHq6YkS_JAnJKsyQp8P-j0Y/edit?usp=sharing'
          target='_blank'>
          <div className={classes.specialButton}>
            <Typography>Engineering Database</Typography>
            <Typography variant='caption'>Created by Qohen Leth</Typography>
          </div>
        </Button>
        <Button
          variant='outlined'
          color='primary'
          href='https://docs.google.com/spreadsheets/d/1Mp7l0bSnMp_G7xWUm75M-XuihDfTdi27rm-vB9K8AX0/edit?usp=sharing'
          target='_blank'>
          <div className={classes.specialButton}>
            <Typography>Engineering Material Locator</Typography>
            <Typography variant='caption'>Created by DTEA</Typography>
          </div>
        </Button>
        <Button
          variant='outlined'
          color='primary'
          href='https://forums.frontier.co.uk/threads/influence-caps-gains-and-the-wine-analogy.423837/'
          target='_blank'>
          <div className={classes.specialButton}>
            <Typography>BGS Influence Caps</Typography>
            <Typography variant='caption'>Created by Jane Turner</Typography>
          </div>
        </Button>
        <Button
          variant='outlined'
          color='primary'
          href='https://forums.frontier.co.uk/threads/this-is-how-resistance-stacking-works.439830/'
          target='_blank'>
          <div className={classes.specialButton}>
            <Typography>Resistance Stacking Explained</Typography>
            <Typography variant='caption'>Created by Fett_Li</Typography>
          </div>
        </Button>
      </div>
    </Paper>
  );
};
