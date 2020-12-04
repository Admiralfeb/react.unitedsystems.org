import { Link, makeStyles, Paper, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import errorImg from '../../assets/404.jpg';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    margin: 5,
    height: '100%',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  paper: {
    width: '80%',
    margin: 'auto',
  },
});

export const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h3">Mistakes were made</Typography>
        <Typography variant="subtitle1">
          You were hyperdicted... escape destruction by going{' '}
          <Link to="/home" component={NavLink}>
            home
          </Link>
          .
        </Typography>
        <img className={classes.img} alt="404 Error" src={errorImg} />
      </Paper>
    </div>
  );
};
