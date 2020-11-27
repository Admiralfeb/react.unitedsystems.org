import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './navbar.styles';

export const NavbarComponent = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Button
        to='/home'
        className={classes.navLink}
        activeClassName={classes.active}
        component={NavLink}>
        Home
      </Button>
      <Button
        to='/about'
        className={classes.navLink}
        activeClassName={classes.active}
        component={NavLink}>
        About
      </Button>
      <Button
        to='/information'
        className={classes.navLink}
        activeClassName={classes.active}
        component={NavLink}>
        Information
      </Button>
      <div className={classes.filler} />
      <Button
        to='/join'
        className={classes.navLink}
        activeClassName={classes.active}
        component={NavLink}>
        Join
      </Button>
    </nav>
  );
};
