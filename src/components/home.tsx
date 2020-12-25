import { Fade, makeStyles, Paper, Typography } from '@material-ui/core';
import { useDownloadLink } from 'hooks/useDownloadLink';
import {
  lore,
  latin,
  latinTranslation,
  videoID,
  videoPosterID,
} from 'data/home';

const useStyles = makeStyles((theme) => ({
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
    width: 350,
    margin: 'auto',
    marginBottom: 10,
  },
  cursive: {
    fontFamily: 'Cinzel, serif',
    fontSize: 32,
  },
  subtitle: {
    flex: '0 0',
  },
  video: {
    width: '100%',
    padding: 0,
  },
  lore: {
    marginBottom: theme.spacing(1),
  },
}));

export const Home = () => {
  const classes = useStyles();
  const { getDownloadLink } = useDownloadLink();
  return (
    <Fade in={true}>
      <div className={classes.root}>
        <Typography variant="h3" className={classes.header}>
          United Systems Cooperative
        </Typography>
        <Paper className={classes.paper}>
          <Typography className={classes.lore}>{lore}</Typography>
          <div className={classes.latin}>
            <Typography className={classes.cursive} variant="h4">
              {latin}
            </Typography>
            <Typography variant="subtitle2" className={classes.subtitle}>
              {latinTranslation}
            </Typography>
          </div>
          <video
            controls
            className={classes.video}
            poster={getDownloadLink(videoPosterID)}
            controlsList="nodownload"
          >
            <source src={getDownloadLink(videoID)} type="video/mp4" />
            "Your browser does not support this video"
          </video>
        </Paper>
      </div>
    </Fade>
  );
};
