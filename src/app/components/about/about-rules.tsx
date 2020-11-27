import {
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto',
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
  },
  '@media (max-width: 1024px)': {
    root: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
    },
    consequences: {
      gridColumn: 1,
    },
  },
});

export const AboutRules = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h3'>Rules</Typography>
      <div className={classes.root}>
        <div className={classes.rules}>
          <Typography variant='h4'>Discord</Typography>
          <List>
            {discordRules.map((rule: string, index: number) => (
              <ListItem key={index}>
                <ListItemText primary={`${index + 1}) ${rule}`} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.rules}>
          <Typography variant='h4'>Members of USC</Typography>
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
      </div>
    </div>
  );
};

const discordRules = [
  'Be Respectful',
  'Be Mature',
  'Do not @everyone',
  'No porn or nudity',
  'No harassment',
  'No excessive swearing',
  'No derogatory terms or phrases',
  'No political discussions as they can become heated.',
];

const memberRules = [
  'Will not, under no circumstance, Combat Log.',
  'Will not attack other USC Personnel or any allies of the United Systems Cooperative.',
  'Will not attack any innocent CMDRs, unless in pre-arranged combat, or for Powerplay.',
  'Will not, under no circumstance, discriminate against other commanders on the basis of race, religion, sexuality, nationality, etc.',
  'Will not, under no circumstance, seek revenge against other USC Personnel, directly or indirectly. Punishments for crimes, and resolutions for transgressions, will be handed out by High Command.',
  'Will not, under no circumstance, to divulge information marked as confidential by High Command.',
];
