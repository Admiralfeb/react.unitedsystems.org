import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../infoStyles';

export const InfoUSCLinks = () => {
  const classes = useStyles();
  return (
    <Paper id='usc-links' className={classes.paper}>
      <Typography variant='h4'>USC Links</Typography>
      <div className={classes.flex}>
        <Button
          href='https://discord.gg/br8Fy2M6cv'
          target='_blank'
          color='primary'
          variant='outlined'>
          Discord
        </Button>
        <Button
          href='https://inara.cz/squadron/7028/'
          target='_blank'
          color='primary'
          variant='outlined'>
          Inara
        </Button>
        <Button
          href='https://www.patreon.com/usc'
          target='_blank'
          color='primary'
          variant='outlined'>
          Patreon
        </Button>
      </div>
    </Paper>
  );
};
