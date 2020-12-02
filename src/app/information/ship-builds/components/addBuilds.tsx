import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    display: 'grid',
    gridTemplate: 'auto / 1fr',
    width: '90%',
    margin: 'auto',
  },
});

export const AddBuild = () => {
  const classes = useStyles();
  const [jsonBuild, setJsonBuild] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJsonBuild(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Button
        to='/information/builds'
        component={NavLink}
        color='secondary'
        variant='outlined'>
        Return to builds
      </Button>
      {jsonBuild === '' ? (
        <TextField
          label='Exported JSON'
          multiline
          value={jsonBuild}
          onChange={handleChange}
        />
      ) : (
        <></>
      )}
      {/*
      desc
      moreInfo
      buildLink
      ship
      engLevel
      guardian
      powerplay
      beginner
      author
      */}
    </div>
  );
};
