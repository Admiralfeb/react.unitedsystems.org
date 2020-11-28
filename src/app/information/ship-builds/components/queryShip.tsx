import { TextField, Tooltip } from '@material-ui/core';
import React from 'react';
import { sortItems } from '../functions/sort';
import Ships from '../assets/shipMap.json';
import {
  Autocomplete,
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/lab';

export const QueryShip = (props: {
  shipSize: number | null;
  setShipSize: React.Dispatch<React.SetStateAction<number | null>>;
  shipType: number | null;
  setShipType: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const { shipType, setShipType, shipSize, setShipSize } = props;

  const handleShipSizeChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setShipType(null);
    setShipSize(newValue);
  };

  return (
    <div className='shipQuery'>
      <h3 className='queryHeader'>Ship Type and Size</h3>
      <div className='shipQuerySection'>
        <div className='shipTypeQuery'>
          <Autocomplete
            id='shipType'
            options={sortItems(Ships, 'name')}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <>
                <span>{option.name}</span>
              </>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Ship Type'
                variant='outlined'
                inputProps={{
                  ...params.inputProps,
                  autocomplete: 'new-password',
                }}
              />
            )}
            value={findShipName(shipType)}
            onChange={(_, value) => setShipType(value!.id)}
          />
        </div>
        <div className='shipSizeQuery'>
          <Tooltip
            title="What's the size of the ship you're looking for?"
            arrow>
            <ToggleButtonGroup
              value={shipSize}
              exclusive
              onChange={handleShipSizeChange}>
              <ToggleButton value={1}>Small</ToggleButton>
              <ToggleButton value={2}>Medium</ToggleButton>
              <ToggleButton value={3}>Large</ToggleButton>
            </ToggleButtonGroup>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

const findShipName = (shipID: number | null) => {
  if (shipID === null) {
    return null;
  }
  const shipName = Ships.find((x) => x.id === shipID);
  return shipName;
};
