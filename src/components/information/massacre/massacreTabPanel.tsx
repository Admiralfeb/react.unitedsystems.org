import { Button, makeStyles, Typography } from '@material-ui/core';
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

  if (tracker) {
    return (
      <>
        <Button onClick={() => context?.deleteTracker(tracker)}>
          Delete Tracker
        </Button>
        <div>
          <MassacreMissions tracker={tracker} />
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
      </>
    );
  } else {
    return <Typography>Tracker not found</Typography>;
  }
};
