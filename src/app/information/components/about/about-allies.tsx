import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';

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
export const AboutAllies = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h3' className={classes.header}>
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

const allies = [
  '1st Imperium Auxiliary Cohort',
  'Alba Rotam Private Military',
  'Arbor Caelum',
  'Black Universe Gazers',
  'Daily Routine Incorperated',
  'Explorers of Nabudis',
  'The Galactic Archive',
  'Gilgamesh Corps',
  'Independence Separatist Fleet',
  'Intergalactic Astronomical Union',
  'Interstellar Incorporated',
  'Knights of Pleiades',
  'Ryders of the Void',
  'ROOKS',
  'Sapere Aude',
  'The Altruists',
];
