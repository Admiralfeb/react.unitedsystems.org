import { Button, makeStyles } from '@material-ui/core';
import { INavItem } from 'models/navItem';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    padding: '0.2rem 0.2rem',
    backgroundColor: '#333',
    height: 'auto',
    minHeight: 'auto',
    justifyContent: 'initial',
    zIndex: 1500,
    [theme.breakpoints.up('md')]: {
      padding: '0.5rem 0.5rem',
    },
  },
  navLink: {
    backgroundColor: 'transparent',
    width: '25%',
    height: 'auto',
    marginRight: '0.2em',
    color: '#f2f2f2',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(15),
      marginRight: theme.spacing(1),
      fontSize: 20,
    },
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  navLinkJoin: {
    backgroundColor: 'transparent',
    width: '25%',
    border: `${theme.palette.secondary.main} 0.1em solid`,
    color: 'white',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(15),
      fontSize: 20,
    },
  },
  activeJoin: {
    backgroundColor: theme.palette.secondary.main,
  },
  filler: {
    display: 'none',
    flex: '1 0',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

export const NavFull = (props: { navItems: INavItem[] }) => {
  const classes = useStyles();
  const { navItems } = props;

  return (
    <nav className={classes.root}>
      {navItems.map((x) => {
        if (x.to.includes('join')) {
          return (
            <Fragment key={x.to}>
              <div className={classes.filler} />
              <Button
                to={x.to}
                color="secondary"
                className={classes.navLinkJoin}
                activeClassName={classes.activeJoin}
                variant="contained"
                component={NavLink}
              >
                {x.text}
              </Button>
            </Fragment>
          );
        } else {
          return (
            <Button
              key={x.to}
              to={x.to}
              className={classes.navLink}
              activeClassName={classes.active}
              component={NavLink}
            >
              {x.text}
            </Button>
          );
        }
      })}
    </nav>
  );
};
