import { Link, makeStyles, Paper, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import release2020_12 from 'data/releases/2020-12';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '90%',
    margin: 'auto',
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export const Releases = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <ReactMarkdown
        plugins={[gfm]}
        renderers={{ paragraph: Typography, link: Link }}
        children={release2020_12}
      />
    </Paper>
  );
};
