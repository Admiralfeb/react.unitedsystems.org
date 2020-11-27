import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {},
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
  latin: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    border: '1px solid white',
    borderRadius: 10,
    width: 300,
    margin: 'auto',
    marginBottom: 10,
  },
  cursive: {
    fontFamily: 'Brush Script MT, Brush Script Std, cursive',
  },
  subtitle: {
    flex: '0 0',
  },
  video: {
    width: '100%',
    padding: 0,
  },
});

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.header}>
        United Systems Cooperative
      </Typography>
      <Paper className={classes.paper}>
        <div className={classes.latin}>
          <Typography className={classes.cursive} variant='h4'>
            Ad Astra Per Aspera
          </Typography>
          <Typography variant='subtitle2' className={classes.subtitle}>
            Through Hardships to the Stars
          </Typography>
        </div>
        <Typography>
          Established in 3306, the United Systems Cooperative is a tight-knit
          organization of independent pilots operating across the galaxy, both
          in human space, and the uncharted sectors beyond. Little is known
          about this groups motives and plans, though many conflicting reports
          are offered by systems across inhabited space. The one thing the
          reports agree on is that members of this group are fiercely loyal to
          one another, and to the organization as a whole. The United Systems
          Cooperative seeks to create a family where everyone is welcome, no
          matter their background, their allegiances, etc. To create a family
          where everyone can get the help they need, make lasting friendships,
          and have new brothers and sisters to fly with them through the black!
        </Typography>
        <video
          controls
          className={classes.video}
          poster='https://dl.dropbox.com/s/nws07775923ta6z/vidImg.png?dl=0'>
          <source
            src='https://dl.dropbox.com/s/h0n88hy5pgtf06n/about_us.mp4?dl=0'
            type='video/mp4'
          />
          "Your browser does not support this video"
        </video>
      </Paper>
    </div>
  );
};
