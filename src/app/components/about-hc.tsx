import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
  },
  rank: {
    border: '3px solid white',
    borderRadius: 10,
    margin: 5,
  },
});
export const AboutHC = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h2' className={classes.header}>
        Meet the High Command
      </Typography>
      <div id='fleet-admiral' className={classes.rank}>
        <Typography>NickG2002</Typography>
        <Typography>Goliath the Second</Typography>
        <Typography>LOKioo42</Typography>
        <Typography>Pablok</Typography>
        <Typography>PracticalHalo</Typography>
        <Typography>RedFang Culph</Typography>
        <Typography>UltraNeros</Typography>
        <Typography>Admiralfeb</Typography>
        <Typography>Akhaten</Typography>
        <Typography>Aurelius Publius</Typography>
        <Typography>Captain Smokeq</Typography>
        <Typography>Clever Ape</Typography>
        <Typography>IM2D</Typography>
        <Typography>Nullyti</Typography>
        <Typography>Yuting9</Typography>
      </div>
    </>
  );
};
