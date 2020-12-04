import { makeStyles } from '@material-ui/core';
import { docsList } from './components/docs/info-docs-list';
import { guidesList } from './components/guides/info-guides-list';
import { toolsList } from './components/tools/info-tools-list';
import { Typography, Paper } from '@material-ui/core';
import { InfoUSCLinks } from './components/info-usclinks';
import { InfoSection } from './components/info-section';

const useStyles = makeStyles((theme) => ({
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
  specialButton: {
    display: 'flex',
    flexDirection: 'column',
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
}));

export const Information = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.header}>
        USC Data Archive
      </Typography>
      <InfoUSCLinks />
      <Paper className={classes.paper}>
        <Typography variant="subtitle1">
          New Players look to the{' '}
          <span className={classes.secondary}> blue buttons </span>for helpful
          tips in getting started with the Guides, Tools, and Documentation
          below.
        </Typography>
      </Paper>
      <InfoSection
        id="guides"
        key="guides"
        header="Guides"
        buttons={guidesList}
      />
      <InfoSection id="tools" key="tools" header="Tools" buttons={toolsList} />
      <InfoSection
        id="docs"
        key="docs"
        header="Documentation"
        buttons={docsList}
      />
    </>
  );
};
