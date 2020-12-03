import {
  Table,
  Typography,
  TableContainer,
  Paper,
  makeStyles,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Loading } from '../../../components';
import { useFleetCarriers } from '../../hooks/useFleetCarriers';
import { IFleetCarrier } from '../../models/fleetCarrier';
import { sortItems } from '../../ship-builds/functions/sort';

const useStyles = makeStyles({
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
export const FleetCarriers = () => {
  const { fleetCarriers, loading } = useFleetCarriers();
  // const squadCarriers = useSquadFleetCarriers();
  // const personalCarriers = usePersonalFleetCarriers();
  const [squadCarriers, setSquadCarriers] = useState<IFleetCarrier[]>();
  const [personalCarriers, setPersonalCarriers] = useState<IFleetCarrier[]>();
  const classes = useStyles();

  useEffect(() => {
    if (!loading) {
      const squadCarriers = fleetCarriers!.filter(
        (x) => !x.purpose.toLowerCase().includes('personal')
      );
      const personalCarriers = fleetCarriers!.filter((x) =>
        x.purpose.toLowerCase().includes('personal')
      );
      setSquadCarriers(sortItems(squadCarriers, 'purpose'));
      setPersonalCarriers(sortItems(personalCarriers, 'name'));
    }
  }, [loading, fleetCarriers]);

  return (
    <div className={classes.table}>
      <Typography variant='h3'>USC Fleet Carriers</Typography>
      {loading ? (
        <Loading />
      ) : (
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Purpose</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Owner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {squadCarriers?.map((carrier) => (
                <TableRow key={carrier.id}>
                  <TableCell>{carrier.purpose}</TableCell>
                  <TableCell>{carrier.name}</TableCell>
                  <TableCell>{carrier.id}</TableCell>
                  <TableCell>{carrier.owner}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Typography variant='h4'>Personal Fleet Carriers of USC</Typography>
      {loading ? (
        <Loading />
      ) : (
        <TableContainer component={Paper} className={classes.secondTable}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Owner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {personalCarriers?.map((carrier) => (
                <TableRow key={carrier.id}>
                  <TableCell>{carrier.name}</TableCell>
                  <TableCell>{carrier.id}</TableCell>
                  <TableCell>{carrier.owner}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
