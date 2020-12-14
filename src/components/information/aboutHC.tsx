import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { hc } from 'data/information';

const useStyles = makeStyles({
  root: {},
  header: {
    textAlign: 'center',
  },
  rank: {
    border: '3px solid white',
    borderRadius: 10,
    margin: 'auto',
    width: 450,
  },
});

/** Displays High Command Members */
export const AboutHC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.header}>
        High Command
      </Typography>
      <Paper className={classes.rank}>
        <List>
          {hc.map((rule: string, i: number) => (
            <ListItem key={i}>
              <ListItemText primary={`${rule}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};
