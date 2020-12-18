import {
  Button,
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
import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

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
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm<IJoinFormFields>();
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
  const [platforms, setPlatforms] = useState<{
    pc: Boolean;
    xbox: Boolean;
    ps: boolean;
  }>({ pc: false, xbox: false, ps: false });

  const ref2Question: string | undefined = useMemo(() => {
    const ref = formFields.reference;
    switch (ref) {
      case 'player':
        return 'Which player referred you?';
      case 'other':
        return "Please explain 'Other'";
      default:
        return undefined;
    }
  }, [formFields]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    const checked = event.target.checked;
    console.log(targetName);
    if (targetName === 'pc' || targetName === 'xbox' || targetName === 'ps') {
      setFormFields((state) => {
        const platforms = state.platforms;
        platforms[targetName] = checked;
        return { ...state, platforms };
      });
    }
  };

  const onSubmit = (data: IJoinFormFields) => console.log(data);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        Join USC
      </Typography>
      <Paper className={classes.paper}>
        <Typography className={classes.header}>
          Items marked with * are required.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.question}>
            <Typography>
              Please enter your in-game CMDR name without 'CMDR'
            </Typography>
            <TextField
              label="CMDR Name"
              inputRef={register({ required: true, minLength: 2 })}
              name="cmdr"
            />
          </div>
          <div className={classes.question}>
            <Typography>
              Please enter your discord name in format: name#1234
            </Typography>
            <TextField
              label="Discord Name"
              inputRef={register({ required: true, pattern: /^.+#\d{4}$/gi })}
              name="discord"
            />
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
                    <Checkbox
                      name="pc"
                      checked={props.value}
                      onChange={(e) => props.onChange(e.target.checked)}
                    />
                  }
                />
                <FormControlLabel
                  label="Xbox One"
                  control={
                    <Checkbox
                      name="xbox"
                      checked={props.value}
                      onChange={(e) => props.onChange(e.target.checked)}
                    />
                  }
                />
                <FormControlLabel
                  label="PS4 / PS5"
                  control={
                    <Checkbox
                      name="ps"
                      checked={props.value}
                      onChange={(e) => props.onChange(e.target.checked)}
                    />
                  }
                />
              </FormGroup>
            </FormControl>
          </div>
          <div className={classes.question}>
            <Typography>How long have you been playing?</Typography>
            <Controller
              as={
                <RadioGroup
                  name="playingLength"
                  value={formFields.playingLength}
                  row
                >
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="Less than 1 month"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="More than 1 month"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="More than 6 months"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="More than 1 year"
                  />
                </RadioGroup>
              }
              name="playingLength"
              control={control}
              defaultValue="0"
            />
          </div>
          <div className={classes.question}>
            <Typography>How did you find us?</Typography>
            <FormControl component="fieldset" required>
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

            {ref2Question && (
              <div>
                <Divider />
                <FormControl>
                  <Typography>{ref2Question}</Typography>
                  <TextField
                    value={formFields.reference2}
                    onChange={handleInputChange}
                    name="reference2"
                    required
                  />
                </FormControl>
              </div>
            )}
          </div>
          <div className={classes.question}>
            <Typography>What timezone are you in?</Typography>
            <TextField
              value={formFields.timezone}
              onChange={handleInputChange}
              name="timezone"
            />
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
              control={
                <Checkbox
                  name="rules"
                  inputRef={register({ required: true })}
                />
              }
              label="Yes"
            />
          </div>
          <Button type="submit">Submit Form</Button>
        </form>
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
  reference: string | null;
  reference2?: string;
  rules: boolean;
  timezone: string;
}
