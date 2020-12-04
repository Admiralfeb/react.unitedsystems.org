import { Button, Paper, Typography } from '@material-ui/core';

import { NavLink, useRouteMatch } from 'react-router-dom';
import useStyles from '../infoStyles';

export const InfoUSCLinks = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <Paper id='usc-links' className={classes.paper}>
      <Typography variant='h4'>USC Links</Typography>
      <div className={classes.flex}>
        <Button
          color='secondary'
          variant='outlined'
          to={`${url}/about/rules`}
          component={NavLink}>
          Rules
        </Button>
        <Button
          color='secondary'
          variant='outlined'
          to={`${url}/about/hc`}
          component={NavLink}>
          Our Management
        </Button>
        <Button
          color='secondary'
          variant='outlined'
          to={`${url}/about/allies`}
          component={NavLink}>
          Our Allies
        </Button>
        <Button
          color='secondary'
          variant='outlined'
          to={`${url}/about/fc`}
          component={NavLink}>
          Our Fleet Carriers
        </Button>
        <Button
          href='https://discord.gg/br8Fy2M6cv'
          target='_blank'
          color='primary'
          variant='outlined'>
          Discord
        </Button>
        <Button
          href='https://inara.cz/squadron/7028/'
          target='_blank'
          color='primary'
          variant='outlined'>
          Inara - USC Squadron
        </Button>
        <Button
          href='https://www.patreon.com/usc'
          target='_blank'
          color='primary'
          variant='outlined'>
          Patreon
        </Button>
      </div>
    </Paper>
  );
};
