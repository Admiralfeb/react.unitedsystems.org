import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
  },
  rank: {
    border: '3px solid white',
    borderRadius: 10,
    margin: 5,
  },
});
export const AboutHC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h2' className={classes.header}>
        High Command
      </Typography>
      <div className={classes.rank}>
        <List>
          {hc.map((rule: string, i: number) => (
            <ListItem key={i}>
              <ListItemText primary={`${rule}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

const hc = [
  'NickG2002',
  'Goliath the Second',
  'LOKioo42',
  'Pablok',
  'PracticalHalo',
  'RedFang Culph',
  'UltraNeros',
  'Admiralfeb',
  'Akhaten',
  'Aurelius Publius',
  'Captain Smokeq',
  'Clever Ape',
  'IM2D',
  'Nullyti',
  'Yuting9',
];
