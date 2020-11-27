import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { InfoDocs } from './info-docs';
import { InfoGuides } from './info-guides';
import { InfoTools } from './info-tools';
import { InfoUSCLinks } from './info-usclinks';

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
  uscLinks: {
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

export const Information = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.header}>
        USC Data Archive
      </Typography>
      <InfoUSCLinks />
      <InfoGuides />
      <InfoTools />
      <InfoDocs />
    </div>
  );
};
