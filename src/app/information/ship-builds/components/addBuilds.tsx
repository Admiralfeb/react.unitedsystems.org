import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { processJSONBuild } from '../functions/processJSONBuild';
import { IBuildInfo } from '../models';
import { getShipInfofromName } from '../functions/getShipInfo';
import { ObjectUnsubscribedError } from 'rxjs';

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
  const [buildInfo, setBuildInfo] = useState<IBuildInfo>();

  const handleJSONChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJsonBuild(event.target.value);
    const {
      buildName,
      shipName,
      guardian,
      powerplay,
      engineering,
      url,
    } = processJSONBuild(event.target.value);
    const engLevel = engineering ? 1 : 0;
    const shipInfo = getShipInfofromName(shipName)!;
    const info: IBuildInfo = {
      id: 50,
      description: buildName,
      guardian,
      powerplay,
      buildLink: url,
      ship: shipInfo.id,
      size: shipInfo.size,
      author: '',
      specializations: [],
      engLevel,
      beginner: false,
    };
    setBuildInfo(info);
  };
  const handleDescChange = (event: ChangeEvent<HTMLInputElement>) => {};

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
          onChange={handleJSONChange}
        />
      ) : (
        <div></div>
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
