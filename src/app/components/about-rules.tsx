import {
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  rules: {
    border: '3px solid white',
    borderRadius: 10,
    margin: 5,
  },
});

export const AboutRules = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h3'>Rules</Typography>
      <div className={classes.rules}>
        <Typography variant='h4'>Discord</Typography>
        <List>
          {discordRules.map((rule: string, index: number) => (
            <ListItem>
              <ListItemText primary={`${index + 1}) ${rule}`} />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.rules}>
        <Typography variant='h4'>Members of USC</Typography>
        <List>
          {memberRules.map((rule: string, index: number) => (
            <ListItem>
              <ListItemText primary={`${index + 1}) ${rule}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
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
