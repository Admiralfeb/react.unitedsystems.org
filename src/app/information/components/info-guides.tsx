import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../infoStyles';
import { Link, useRouteMatch } from 'react-router-dom';
import { guidesList } from './info-guides-list';

export const InfoGuides = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  return (
    <Paper id='guides' className={classes.paper}>
      <Typography variant='h4'>Guides</Typography>
      <Typography variant='subtitle1'>
        New Players look to the{' '}
        <span className={classes.secondary}> blue buttons </span>for helpful
        tips in getting started.
      </Typography>
      <div className={classes.flex}>
        {guidesList.map((guide) => {
          if (guide.local === true) {
            return (
              <Button
                variant='outlined'
                color={guide.beginner ? 'secondary' : 'primary'}
                component={Link}
                to={`${url}${guide.link}`}>
                <div className={classes.specialButton}>
                  <Typography>{guide.title}</Typography>
                  <Typography variant='caption'>{guide.caption}</Typography>
                </div>
              </Button>
            );
          } else {
            return (
              <Button
                variant='outlined'
                color={guide.beginner ? 'secondary' : 'primary'}
                href={guide.link}
                target='_blank'>
                <div className={classes.specialButton}>
                  <Typography>{guide.title}</Typography>
                  <Typography variant='caption'>{guide.caption}</Typography>
                </div>
              </Button>
            );
          }
        })}
      </div>
    </Paper>
  );
};
