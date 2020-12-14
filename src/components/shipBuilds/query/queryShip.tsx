import { Tooltip } from '@material-ui/core';

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { ChangeEvent } from 'react';
import { IShipInfo } from 'models/shipBuilds';
import { ShipAutocomplete } from '../shipAutocomplete';
import { useQueryStyles } from './queryStyles';

export const QueryShip = (props: {
  shipSize: number | null;
  setShipSize: React.Dispatch<React.SetStateAction<number | null>>;
  shipType: string | null;
  setShipType: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const { shipType, setShipType, shipSize, setShipSize } = props;
  const classes = useQueryStyles();

  const handleShipSizeChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setShipType(null);
    setShipSize(newValue);
  };

  const handleShipChange = (_: ChangeEvent<{}>, value: IShipInfo | null) => {
    const ship = value?.shipId;
    setShipType(ship ?? null);
    setShipSize(null);
  };

  return (
    <div className={classes.querySection}>
      <h3 className={classes.querySectionheader}>Ship Type and Size</h3>
      <div className={classes.shipQueries}>
        <div className={classes.shipTypeQuery}>
          <ShipAutocomplete
            shipType={shipType}
            handleShipChange={handleShipChange}
          />
        </div>
        <div className={classes.shipSizeQuery}>
          <Tooltip
            title="What's the size of the ship you're looking for?"
            arrow
          >
            <ToggleButtonGroup
              value={shipSize}
              exclusive
              onChange={handleShipSizeChange}
            >
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
