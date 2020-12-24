import { makeStyles, Typography } from '@material-ui/core';
import { useInfoButtons } from 'hooks/useInfoButtons';
import { AboutLinks } from './aboutLinks';

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
  },
  hcAndAllies: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
}));

export const About = () => {
  const classes = useStyles();
  const { uscLinksList } = useInfoButtons();
  return (
    <>
      <Typography variant="h3" className={classes.header}>
        About USC
      </Typography>
      <AboutLinks
        id="usc-links"
        key="usc-links"
        header="USC Links"
        buttons={uscLinksList}
      />
    </>
  );
};
