import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useStyles from '../infoStyles';
import { toolsList } from './info-tools-list';

export const InfoTools = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <Paper id='tools' className={classes.paper}>
      <Typography variant='h4'>Tools</Typography>
      <Typography variant='subtitle1'>
        New Players look to the{' '}
        <span className={classes.secondary}> blue buttons </span>for helpful
        tips in getting started.
      </Typography>
      <div className={classes.flex}>
        {toolsList.map((guide) => {
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
