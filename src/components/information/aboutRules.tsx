import {
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { discordRules, memberRules } from 'data/information';

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
  },
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
    },
  },
  rules: {
    border: '3px solid white',
    borderRadius: 10,
    margin: 5,
  },
  consequences: {
    gridColumn: '1 / 3',
    border: '3px solid white',
    borderRadius: 10,
    margin: 5,
    [theme.breakpoints.down('md')]: {
      gridColumn: 1,
    },
  },
}));

/** Displays the rules */
export const AboutRules = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="h3">Rules</Typography>
      <Paper className={classes.root}>
        <div className={classes.rules}>
          <Typography variant="h4">Discord</Typography>
          <List>
            {discordRules.map((rule: string, index: number) => (
              <ListItem key={index}>
                <ListItemText primary={`${index + 1}) ${rule}`} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.rules}>
          <Typography variant="h4">Members of USC</Typography>
          <List>
            {memberRules.map((rule: string, index: number) => (
              <ListItem key={index}>
                <ListItemText primary={`${index + 1}) ${rule}`} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.consequences}>
          <Typography>
            Those found in violation of any of these Discord or Group rules, or
            found attempting to bypass these rules in any way, will first be
            subject to a minimum of a warning, further offences will be subject
            to demotion, expulsion, and/or USC Kill-on-Sight status.
          </Typography>
        </div>
      </Paper>
    </div>
  );
};
