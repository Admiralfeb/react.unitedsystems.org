import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Tooltip } from '@material-ui/core';
import BlockIcon from '@material-ui/icons/Block';
import engineerIcon from '../assets/Engineer_icon.svg';

interface IEngToggleGroupProps {
  handleEngLevelChange: (
    _: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => void;
  engLevel: number | null;
}

export const EngToggleGroup = (props: IEngToggleGroupProps) => {
  const { engLevel, handleEngLevelChange } = props;

  return (
    <ToggleButtonGroup
      value={engLevel}
      exclusive
      onChange={handleEngLevelChange}
    >
      <ToggleButton value={0}>
        <Tooltip title="No Engineering" arrow>
          <div className="engButton">
            <BlockIcon />
          </div>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value={1}>
        <Tooltip title="Simple Engineering" arrow>
          <div className="engButton">
            <img src={engineerIcon} alt="engineeringIcon" />
          </div>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value={2}>
        <Tooltip title="Moderate Engineering" arrow>
          <div className="engButton">
            <img src={engineerIcon} alt="engineeringIcon" />
            <img src={engineerIcon} alt="engineeringIcon" />
          </div>
        </Tooltip>
      </ToggleButton>
      <ToggleButton value={3}>
        <Tooltip title="End-Game/Extreme Engineering" arrow>
          <div className="engButton">
            <img src={engineerIcon} alt="engineeringIcon" />
            <img src={engineerIcon} alt="engineeringIcon" />
            <img src={engineerIcon} alt="engineeringIcon" />
          </div>
        </Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
