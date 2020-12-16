import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Link,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    minWidth: 400,
    margin: 'auto',
  },
  header: {
    textAlign: 'center',
  },
  paper: { padding: theme.spacing(2) },
  question: {
    borderColor: theme.palette.secondary.main,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1),
  },
}));

export const JoinForm = () => {
  const [formFields, setFormFields] = useState<IJoinFormFields>({
    cmdr: '',
    discord: '',
    platforms: {
      pc: false,
      xbox: false,
      ps: false,
    },
    playingLength: null,
    reference: null,
    reference2: undefined,
    rules: false,
    timezone: '',
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        Join USC
      </Typography>
      <Paper className={classes.paper}>
        <div className={classes.question}>
          <Typography>
            Please enter your in-game CMDR name without 'CMDR'
          </Typography>
          <TextField label="CMDR Name" value={formFields.cmdr} />
        </div>
        <div className={classes.question}>
          <Typography>
            Please enter your discord name in format: name#1234
          </Typography>
          <TextField label="Discord Name" value={formFields.discord} />
        </div>
        <div className={classes.question}>
          <Typography>
            Which platform(s) do you play on? Choose all that apply.
          </Typography>
          <FormControl component="fieldset">
            <FormGroup row>
              <FormControlLabel
                label="PC"
                control={
                  <Checkbox checked={formFields.platforms.pc} name="pc" />
                }
              />
              <FormControlLabel
                label="Xbox One"
                control={
                  <Checkbox checked={formFields.platforms.xbox} name="xbox" />
                }
              />
              <FormControlLabel
                label="PS4 / PS5"
                control={
                  <Checkbox checked={formFields.platforms.ps} name="ps" />
                }
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className={classes.question}>
          <Typography>How long have you been playing?</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              name="playingLength"
              value={formFields.playingLength}
              row
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Less than 1 month"
              />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="More than 1 month"
              />
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="More than 6 months"
              />
              <FormControlLabel
                value={3}
                control={<Radio />}
                label="More than 1 year"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.question}>
          <Typography>How did you find us?</Typography>
          <FormControl component="fieldset">
            <RadioGroup name="reference" value={formFields.playingLength} row>
              <FormControlLabel
                value="reddit"
                control={<Radio />}
                label="Reddit"
              />
              <FormControlLabel
                value="inara"
                control={<Radio />}
                label="Inara"
              />
              <FormControlLabel
                value="player"
                control={<Radio />}
                label="Player Referral"
              />
              <FormControlLabel
                value="facebook"
                control={<Radio />}
                label="Facebook"
              />
              <FormControlLabel
                value="website"
                control={<Radio />}
                label="Our Website"
              />
              <FormControlLabel
                value="forums"
                control={<Radio />}
                label="Forums"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          {formFields.reference2 && (
            <div>
              <Divider />
              <FormControl>
                <Typography>{formFields.reference2.question}</Typography>
                <TextField value={formFields.reference2.answer} />
              </FormControl>
            </div>
          )}
        </div>
        <div className={classes.question}>
          <Typography>What timezone are you in?</Typography>
          <TextField />
        </div>
        <div className={classes.question}>
          <Typography>
            I have read and agree to the{' '}
            <Link
              component={NavLink}
              to="/information/about/rules"
              target="_blank"
            >
              rules
            </Link>
            .
          </Typography>
          <FormControlLabel
            control={<Checkbox checked={formFields.rules} name="rules" />}
            label="Yes"
          />
        </div>
      </Paper>
    </div>
  );
};

interface IJoinFormFields {
  cmdr: string;
  discord: string;
  platforms: {
    pc: boolean;
    xbox: boolean;
    ps: boolean;
  };
  playingLength: number | null;
  reference: number | null;
  reference2?: {
    question: string;
    answer: string;
  };
  rules: boolean;
  timezone: string;
}
