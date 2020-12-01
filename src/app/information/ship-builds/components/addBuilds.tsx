import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const AddBuild = () => {
  const [jsonBuild, setJsonBuild] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJsonBuild(event.target.value);
  };

  return (
    <>
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
    </>
  );
};
