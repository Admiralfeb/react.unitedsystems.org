import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core';
import {
  IFactionMission,
  IFactionwMissions,
  IMassacreTrack,
} from 'models/massacreTrack';
import { useSnackbar } from 'notistack';
import { ChangeEvent, useState } from 'react';

export const MassacreMissions = (props: { tracker: IMassacreTrack }) => {
  const { tracker } = props;
  return (
    <Container maxWidth="xl">
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>Faction</TableCell>
              <TableCell>Reputation</TableCell>
              {tracker.factions[0].missions.map((mission, index) => (
                <TableCell key={index}>{index + 1}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tracker.factions.map((faction) => (
              <FactionRow key={faction.name} faction={faction} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const FactionRow = (props: { faction: IFactionwMissions }) => {
  const { faction } = props;
  const { enqueueSnackbar } = useSnackbar();

  const [totalKills, setTotalKills] = useState(0);
  const [missionKills, setMissionKills] = useState<Array<IFactionMission>>(
    () => {
      const newMissions = faction.missions.map((mission) => {
        if (mission === null) {
          const newMission: IFactionMission = {
            timeStamp: new Date(),
            killsforMission: 0,
            killsCompleted: 0,
          };
          return newMission;
        } else {
          return mission;
        }
      });
      return newMissions;
    }
  );

  const handleKillsforMissionChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const stringTitle = event.target.name;
    const stringValue = event.target.value;

    let numberValue = 0;
    if (stringValue !== '') {
      numberValue = parseInt(stringValue);
    }
    if (isNaN(numberValue)) {
      enqueueSnackbar('A value entered is not a number', {
        variant: 'warning',
      });
      return;
    }
    const killIndex = parseInt(stringTitle);
    console.log({ killIndex, numberValue });
    setMissionKills((previous) => {
      previous[killIndex] = {
        ...previous[killIndex],
        killsforMission: numberValue,
      };
      const totalKillsNeeded: number = previous.reduce(
        (acc: number, current: IFactionMission) => {
          return acc + current.killsforMission;
        },
        0
      );
      setTotalKills(totalKillsNeeded);
      return previous;
    });
  };

  return (
    <TableRow>
      <TableCell>{totalKills}</TableCell>
      <TableCell>{faction.name}</TableCell>
      <TableCell>{faction.reputation}</TableCell>
      {missionKills.map((mission, index) => (
        <TableCell key={index}>
          <TextField
            value={mission.killsforMission}
            onChange={handleKillsforMissionChange}
            name={index.toString()}
          />
        </TableCell>
      ))}
    </TableRow>
  );
};
