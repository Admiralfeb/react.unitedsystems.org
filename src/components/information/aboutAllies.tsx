import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { allies } from 'data/information';

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
  },
  allies: {
    border: '3px solid white',
    borderRadius: 10,
    margin: 'auto',
    width: 450,
  },
});

/** Displays Allies */
export const AboutAllies = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.header}>
        Allies
      </Typography>
      <Paper className={classes.allies}>
        <List>
          {allies.map((rule: string, i: number) => (
            <ListItem key={i}>
              <ListItemText primary={`${rule}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};
