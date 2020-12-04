import { makeStyles, Paper, Typography } from '@material-ui/core';

import { AboutAllies } from './about-allies';
import { AboutHC } from './about-hc';
import { AboutRules } from './about-rules';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  header: {
    textAlign: 'center',
  },
  paper: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
  },
  rules: {
    border: '3px solid white',
    borderRadius: 10,
    margin: 5,
  },
  setGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  '@media (max-width: 1024px)': {
    setGrid: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 1fr',
    },
  },
});

export const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        About USC
      </Typography>
      <Paper className={classes.paper}>
        <AboutRules />
        <div className={classes.setGrid}>
          <AboutHC />
          <AboutAllies />
        </div>
      </Paper>
    </div>
  );
};
