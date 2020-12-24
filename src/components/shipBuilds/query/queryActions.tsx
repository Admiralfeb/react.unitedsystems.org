import { Button, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    gridArea: 'buttons',
    '& button': {
      margin: '5px',
    },
  },
});

export const QueryActions = (props: { resetQueries: () => void }) => {
  const classes = useStyles();
  const { resetQueries } = props;
  return (
    <div className={classes.root}>
      <Button
        onClick={resetQueries}
        color="primary"
        variant="outlined"
        className="resetButton"
      >
        Reset Selections
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        component={NavLink}
        to="/information/builds/add"
      >
        Add Build
      </Button>
    </div>
  );
};
