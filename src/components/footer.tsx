import Typography from '@material-ui/core/Typography';
import { Button, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { ReactNode, useContext } from 'react';
import { RealmAppContext } from 'providers';
import { LoginProviders } from 'models/loginProviders';

function ImgCopyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      style={{ textAlign: 'center' }}
    >
      Thank you to CMDR RaZ uryel for the background image
    </Typography>
  );
}
function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      style={{ textAlign: 'center' }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://unitedsystems.org/">
        United Systems Cooperative
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  center: {
    textAlign: 'center',
  },
}));

export const Footer = (props: { children?: ReactNode | JSX.Element }) => {
  const classes = useStyles();
  const realm = useContext(RealmAppContext);
  const { children } = props;

  return (
    <div className={classes.root}>
      <div className={classes.main}>{children}</div>
      <footer className={classes.footer}>
        <Container maxWidth="sm" className={classes.center}>
          {realm?.checkUserProvider(LoginProviders.userpass) === true && (
            <Button onClick={() => realm.logOut()}>Log out</Button>
          )}
          <Copyright />
          <ImgCopyright />
        </Container>
      </footer>
    </div>
  );
};
