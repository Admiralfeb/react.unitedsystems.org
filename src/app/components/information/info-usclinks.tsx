import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  uscLinks: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
  },
});

export const InfoUSCLinks = () => {
  const classes = useStyles();
  return (
    <Paper id='usc-links' className={classes.uscLinks}>
      <Typography variant='h4'>USC Links</Typography>
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
    </Paper>
  );
};
