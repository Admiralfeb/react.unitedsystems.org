import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { IInfoButton } from '../models/infoButtonModel';
import useStyles from '../infoStyles';

interface ISectionProps {
  id: string;
  header: string;
  buttons: IInfoButton[];
}

export const InfoSection = (props: ISectionProps) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { id, header, buttons } = props;

  return (
    <Paper id={id} className={classes.paper}>
      <Typography variant='h4'>{header}</Typography>
      <div className={classes.flex}>
        {buttons.map((guide) => {
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
