import img from '../../assets/EDLoader1.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
});

export const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>Loading</h3>
      <img id='imgLoading' width='300' alt='Loading' src={img} />
    </div>
  );
};
