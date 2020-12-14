import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from '@material-ui/core';
import { IFleetCarrier } from 'models/information/fleetCarrier';
import { useStyles } from './carriers';

export const PersonalCarriers = (props: {
  carriers: IFleetCarrier[] | undefined;
}) => {
  const classes = useStyles();
  const { carriers } = props;

  return (
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
          {carriers?.map((carrier) => (
            <TableRow key={carrier.id}>
              <TableCell>{carrier.name}</TableCell>
              <TableCell>{carrier.id}</TableCell>
              <TableCell>{carrier.owner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
