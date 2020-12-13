import { makeStyles, Typography } from '@material-ui/core';
import { useInfographic } from 'hooks/information/useInfographic';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
});

export const Infographic = (props: { img: string }) => {
  const infographic = useInfographic(props.img);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {infographic ? (
        <>
          <Typography variant="h3">{infographic.title}</Typography>
          <img src={infographic.img} alt={infographic.title} />
        </>
      ) : (
        <Typography>Image not found</Typography>
      )}
    </div>
  );
};
