import { makeStyles, Paper, Typography } from '@material-ui/core';
import { MassacreContext } from 'providers/massacreTrackerProvider';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '90%',
    margin: 'auto',
    padding: theme.spacing(1),
  },
  center: {
    textAlign: 'center',
  },
}));

/**
 * 1. Ask user for system.
 * 2. Get populated systems within 10 LY
 * 3. Ask user to select possible systems
 * 4. Get stations within the possible systems
 */

export const MassacreTabAddPanel = () => {
  const context = useContext(MassacreContext);
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" className={classes.center}>
        Add a Massacre HazRez System
      </Typography>
      <Paper className={classes.paper}></Paper>
    </>
  );
};
