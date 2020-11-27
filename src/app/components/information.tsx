import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { UnderConstruction } from './underConstruction';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  header: {
    textAlign: 'center',
  },
});

export const Information = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.header}>
        USC Data Archive
      </Typography>
      <UnderConstruction />
    </div>
  );
};
