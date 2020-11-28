import { Tooltip } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import React from 'react';
import { OtherFilters } from '../models/otherFilters';
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from '@material-ui/icons/Check';

export const QueryOther = (props: {
  other: OtherFilters;
  setOther: React.Dispatch<React.SetStateAction<OtherFilters>>;
}) => {
  const { other, setOther } = props;

  const handleGuardianChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setOther({ ...other, guardian: newValue });
  };
  const handlePowerPlayChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setOther({ ...other, powerplay: newValue });
  };
  const handleBeginnerChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setOther({ ...other, beginner: newValue });
  };

  return (
    <div className='otherQuery'>
      <h3 className='queryHeader'>Other Filters</h3>
      <div className='otherButtons'>
        <Tooltip title='Should the build have Guardian components?' arrow>
          <div className='guardian'>
            <label>Guardian</label>
            <ToggleButtonGroup
              value={other.guardian}
              exclusive
              onChange={handleGuardianChange}>
              <ToggleButton value={1}>
                <CheckIcon />
              </ToggleButton>
              <ToggleButton value={0}>
                <BlockIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
        <Tooltip title='Does the build have Power Play modules?' arrow>
          <div className='powerplay'>
            <label>Power Play</label>
            <ToggleButtonGroup
              value={other.powerplay}
              exclusive
              onChange={handlePowerPlayChange}>
              <ToggleButton value={1}>
                <CheckIcon />
              </ToggleButton>
              <ToggleButton value={0}>
                <BlockIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
        <Tooltip title='Is this build easy to achieve early-game?'>
          <div className='beginner'>
            <label>Beginner</label>
            <ToggleButtonGroup
              value={other.beginner}
              exclusive
              onChange={handleBeginnerChange}>
              <ToggleButton value={1}>
                <CheckIcon />
              </ToggleButton>
              <ToggleButton value={0}>
                <BlockIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
