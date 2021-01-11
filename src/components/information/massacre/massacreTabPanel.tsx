import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import { IMassacreTrack } from 'models/massacreTrack';
import { MassacreContext } from 'providers/massacreTrackerProvider';
import { useContext, useMemo } from 'react';
import { MassacreMissions } from './massacreMissions';
import { StationList } from './stationList';

const useStyles = makeStyles((theme) => ({
  systems: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(1),
  },
}));

export const MassacreTabPanel = (props: { system: string }) => {
  const { system } = props;
  const context = useContext(MassacreContext);
  const tracker = useMemo(() => {
    return context?.trackers.find((x) => x.hazRezSystem === system);
  }, [system, context?.trackers]);

  const classes = useStyles();

  if (context && tracker) {
    const deleteTracker = () => {
      const shouldDelete = window.confirm(
        `Do you really want to delete the ${tracker.hazRezSystem} tracker?`
      );
      if (shouldDelete === true) {
        context.deleteTracker(tracker);
      }
    };

    const addMissionColumn = () => {
      const newFactions = tracker.factions.map((faction) => {
        faction.missions = [
          ...faction.missions,
          { timeStamp: new Date(), killsforMission: 0, killsCompleted: 0 },
        ];
        return faction;
      });
      const newTracker: IMassacreTrack = { ...tracker, factions: newFactions };
      context.updateTracker(tracker.hazRezSystem, newTracker);
    };

    const deleteLastMissionColumn = () => {
      const newFactions = tracker.factions.map((faction) => {
        faction.missions = [
          ...faction.missions.slice(0, faction.missions.length - 1),
        ];
        return faction;
      });
      const newTracker: IMassacreTrack = { ...tracker, factions: newFactions };
      context.updateTracker(tracker.hazRezSystem, newTracker);
    };

    return (
      <Container maxWidth="xl">
        <Button onClick={deleteTracker}>Delete Tracker</Button>
        <Button onClick={addMissionColumn}>Add Column to tracker</Button>
        <Button onClick={deleteLastMissionColumn}>
          Delete last column of tracker
        </Button>
        <div>
          <MassacreMissions
            tracker={tracker}
            updateTracker={context.updateTracker}
          />
        </div>
        <div>
          <Typography variant="h4">Stations</Typography>
          <div className={classes.systems}>
            {tracker.systemsin10LY.map((system) => (
              <StationList
                key={system.name}
                system={system.name}
                stations={system.stations}
              />
            ))}
          </div>
        </div>
      </Container>
    );
  } else {
    return <Typography>Tracker not found</Typography>;
  }
};
