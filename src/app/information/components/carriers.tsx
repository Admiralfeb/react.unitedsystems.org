import { Typography, makeStyles } from '@material-ui/core';
import { useMemo } from 'react';
import { EDSpinner } from '@admiralfeb/react-components';
import { useFleetCarriers } from '../hooks/useFleetCarriers';
import { IFleetCarrier } from '../models/fleetCarrier';
import { sortItems } from '../functions/sort';
import { PersonalCarriers } from './carriersPersonal';
import { USCCarriers } from './carriersUSC';

export const useStyles = makeStyles({
  table: {
    maxWidth: 600,
    textAlign: 'center',
    margin: 'auto',
  },
  secondTable: {
    maxWidth: 600,
    textAlign: 'center',
    margin: 'auto',
  },
});
export const Carriers = () => {
  const classes = useStyles();
  const { fleetCarriers, loading } = useFleetCarriers();
  let personalCarriers = usePersonalCarriers(fleetCarriers);
  let squadCarriers = useSquadCarriers(fleetCarriers);

  // const [squadCarriers, setSquadCarriers] = useState<IFleetCarrier[]>();
  // const [personalCarriers, setPersonalCarriers] = useState<IFleetCarrier[]>();

  return (
    <div className={classes.table}>
      <Typography variant="h3">USC Fleet Carriers</Typography>
      {loading ? <EDSpinner /> : <USCCarriers carriers={squadCarriers} />}
      <Typography variant="h4">Personal Fleet Carriers of USC</Typography>
      {loading ? (
        <EDSpinner />
      ) : (
        <PersonalCarriers carriers={personalCarriers} />
      )}
    </div>
  );
};

const usePersonalCarriers = (fleetCarriers: IFleetCarrier[] | undefined) => {
  return useMemo(() => {
    if (fleetCarriers) {
      const personalCarriers = fleetCarriers.filter((x) =>
        x.purpose.toLowerCase().includes('personal')
      );
      return sortItems(personalCarriers, 'name');
    } else {
      return undefined;
    }
  }, [fleetCarriers]);
};
const useSquadCarriers = (fleetCarriers: IFleetCarrier[] | undefined) => {
  return useMemo(() => {
    if (fleetCarriers) {
      const personalCarriers = fleetCarriers.filter(
        (x) => !x.purpose.toLowerCase().includes('personal')
      );
      return sortItems(personalCarriers, 'name');
    } else {
      return undefined;
    }
  }, [fleetCarriers]);
};
