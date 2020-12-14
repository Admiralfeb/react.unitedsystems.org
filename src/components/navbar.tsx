import { NavLink } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import { useLoginAnon } from 'hooks/useLoginAnon';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    padding: '5px 10px',
    backgroundColor: '#333',
    height: 'auto',
    minHeight: 'auto',
    justifyContent: 'initial',
    zIndex: 1500,
  },
  img: {
    height: 'auto',
    width: '55px',
    float: 'left',
    display: 'block',
    marginRight: '1em',
  },
  navLink: {
    backgroundColor: 'transparent',
    color: '#f2f2f2',
    textAlign: 'center',
    textDecoration: 'none',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '0.5em',
    textTransform: 'initial',
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  filler: {
    flex: '1 0',
  },
}));

export const NavbarComponent = () => {
  const classes = useStyles();
  useLoginAnon();

  return (
    <nav className={classes.root}>
      <Button
        to="/home"
        className={classes.navLink}
        activeClassName={classes.active}
        component={NavLink}
      >
        Home
      </Button>
      <Button
        to="/information"
        exact
        className={classes.navLink}
        activeClassName={classes.active}
        component={NavLink}
      >
        Information
      </Button>
      <Button
        to="/information/builds"
        exact
        className={classes.navLink}
        activeClassName={classes.active}
        component={NavLink}
      >
        USC Builds
      </Button>
      <div className={classes.filler} />
      <Button
        to="/join"
        color="secondary"
        variant="contained"
        component={NavLink}
      >
        Join
      </Button>
    </nav>
  );
};
