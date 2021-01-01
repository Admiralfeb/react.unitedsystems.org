import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { IMassacreTrack } from 'models/massacreTrack';

export const MassacreMissions = (props: { tracker: IMassacreTrack }) => {
  const { tracker } = props;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>Faction</TableCell>
              <TableCell>Reputation</TableCell>
              {tracker.factions.map((faction, index) => (
                <TableCell key={faction.name}>{index + 1}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tracker.factions.map((faction) => (
              <TableRow key={faction.name}>
                <TableCell>0</TableCell>
                <TableCell>{faction.name}</TableCell>
              </TableRow>
            ))}
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
