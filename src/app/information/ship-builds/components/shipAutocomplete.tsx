import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { sortItems } from '../functions/sort';
import { ChangeEvent } from 'react';
import { IShipInfo } from '../models';
import { useShips } from '../hooks/useShips';

const findShipName = (ships: IShipInfo[], shipID: number | null) => {
  if (shipID === null) {
    return null;
  }
  const shipName = ships.find((x) => x.id === shipID);
  return shipName;
};

interface IShipAutocompleteProps {
  shipType: number | null;
  handleShipChange: (event: ChangeEvent<{}>, value: IShipInfo | null) => void;
}

export const ShipAutocomplete = (props: IShipAutocompleteProps) => {
  const { shipType, handleShipChange } = props;
  const ships = useShips();

  return (
    <Autocomplete
      id="shipType"
      options={sortItems(ships, 'name')}
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
          label="Ship Type"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autocomplete: 'new-password',
          }}
        />
      )}
      value={findShipName(ships, shipType)}
      onChange={handleShipChange}
    />
  );
};
