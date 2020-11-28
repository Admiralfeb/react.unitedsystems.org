import { Tooltip, Typography } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import BlockIcon from '@material-ui/icons/Block';
import engineerIcon from '../assets/Engineer_icon.svg';

import React, { SetStateAction } from 'react';

export const QueryEngineering = (props: {
  engLevel: number | null;
  setEngLevel: React.Dispatch<SetStateAction<number | null>>;
}) => {
  const { engLevel, setEngLevel } = props;

  const handleEngLevelChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setEngLevel(newValue);
  };

  return (
    <div className='engineeringQuery'>
      <h3 className='queryHeader'>Ship Engineering Level</h3>
      <Typography>
        Select Engineering level ranging from None to Max Engineering.
      </Typography>
      <ToggleButtonGroup
        value={engLevel}
        exclusive
        onChange={handleEngLevelChange}>
        <ToggleButton value={0}>
          <Tooltip title='No Engineering' arrow>
            <div className='engButton'>
              <BlockIcon />
            </div>
          </Tooltip>
        </ToggleButton>
        <ToggleButton value={1}>
          <Tooltip title='Simple Engineering' arrow>
            <div className='engButton'>
              <img src={engineerIcon} alt='engineeringIcon' />
            </div>
          </Tooltip>
        </ToggleButton>
        <ToggleButton value={2}>
          <Tooltip title='Moderate Engineering' arrow>
            <div className='engButton'>
              <img src={engineerIcon} alt='engineeringIcon' />
              <img src={engineerIcon} alt='engineeringIcon' />
            </div>
          </Tooltip>
        </ToggleButton>
        <ToggleButton value={3}>
          <Tooltip title='End-Game/Extreme Engineering' arrow>
            <div className='engButton'>
              <img src={engineerIcon} alt='engineeringIcon' />
              <img src={engineerIcon} alt='engineeringIcon' />
              <img src={engineerIcon} alt='engineeringIcon' />
            </div>
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
