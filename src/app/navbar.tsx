import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './navbar.styles';
import { useRealmApp } from './hooks/useRealmApp';

export const NavbarComponent = () => {
  const classes = useStyles();
  const realm = useRealmApp();

  useEffect(() => {
    console.log(realm.currentUser);
    if (realm.currentUser === null) {
      realm
        .logInAnon()
        .then((_) => console.log(realm.currentUser))
        .catch((reason) => console.log(reason));
    }
  }, []);

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
