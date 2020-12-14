import { Tooltip } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import { OtherFilters } from 'models/shipBuilds/otherFilters';
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from '@material-ui/icons/Check';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { useQueryStyles } from './queryStyles';

export const QueryOther = (props: {
  other: OtherFilters;
  setOther: Dispatch<SetStateAction<OtherFilters>>;
}) => {
  const { other, setOther } = props;
  const classes = useQueryStyles();

  const handleGuardianChange = (
    _: MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setOther((prevState) => ({ ...prevState, guardian: newValue }));
  };
  const handlePowerPlayChange = (
    _: MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setOther((prevState) => ({ ...prevState, powerplay: newValue }));
  };
  const handleBeginnerChange = (
    _: MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setOther((prevState) => ({ ...prevState, beginner: newValue }));
  };
  const handleShowVariantsChange = (
    _: MouseEvent<HTMLElement>,
    checked: boolean
  ) => {
    setOther((prevState) => ({ ...prevState, showVariants: checked }));
  };

  return (
    <div className={classes.querySection}>
      <h3 className={classes.querySectionheader}>Other Filters</h3>
      <div className={classes.queryOtherButtons}>
        <Tooltip title="Show all builds, including variants" arrow>
          <div className={classes.queryOtherButtonGrids}>
            <label>Show Variants</label>
            <ToggleButtonGroup
              value={other.showVariants}
              exclusive
              onChange={handleShowVariantsChange}
            >
              <ToggleButton value={true}>
                <CheckIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
        <Tooltip title="Should the build have Guardian components?" arrow>
          <div className={classes.queryOtherButtonGrids}>
            <label>Guardian</label>
            <ToggleButtonGroup
              value={other.guardian}
              exclusive
              onChange={handleGuardianChange}
            >
              <ToggleButton value={1}>
                <CheckIcon />
              </ToggleButton>
              <ToggleButton value={0}>
                <BlockIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
        <Tooltip title="Does the build have Power Play modules?" arrow>
          <div className={classes.queryOtherButtonGrids}>
            <label>Power Play</label>
            <ToggleButtonGroup
              value={other.powerplay}
              exclusive
              onChange={handlePowerPlayChange}
            >
              <ToggleButton value={1}>
                <CheckIcon />
              </ToggleButton>
              <ToggleButton value={0}>
                <BlockIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
        <Tooltip title="Is this build easy to achieve early-game?" arrow>
          <div
            className={`${classes.queryOtherButtonGrids} ${classes.QueryOtherBeginnerButtons}`}
          >
            <label>Beginner</label>
            <ToggleButtonGroup
              value={other.beginner}
              exclusive
              onChange={handleBeginnerChange}
            >
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
