import { Button, Paper, Typography } from '@material-ui/core';
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
      <Typography variant="h4">{header}</Typography>
      <div className={classes.grid}>
        <div className={classes.flex}>
          {buttons
            .filter((x) => x.beginner === true)
            .map((guide) => {
              if (guide.local === true) {
                return (
                  <Button
                    variant="outlined"
                    color={guide.beginner ? 'secondary' : 'primary'}
                    component={Link}
                    to={`${url}${guide.link}`}
                    key={guide.title}
                  >
                    <div className={classes.specialButton}>
                      <Typography>{guide.title}</Typography>
                      <Typography variant="caption">{guide.caption}</Typography>
                    </div>
                  </Button>
                );
              } else {
                return (
                  <Button
                    variant="outlined"
                    color={guide.beginner ? 'secondary' : 'primary'}
                    href={guide.link}
                    target="_blank"
                    key={guide.title}
                  >
                    <div className={classes.specialButton}>
                      <Typography>{guide.title}</Typography>
                      <Typography variant="caption">{guide.caption}</Typography>
                    </div>
                  </Button>
                );
              }
            })}
        </div>
        <div className={classes.flex}>
          {buttons
            .filter((x) => x.beginner === false)
            .map((guide) => {
              if (guide.local === true) {
                return (
                  <Button
                    variant="outlined"
                    color={guide.beginner ? 'secondary' : 'primary'}
                    component={Link}
                    to={`${url}${guide.link}`}
                    key={guide.title}
                  >
                    <div className={classes.specialButton}>
                      <Typography>{guide.title}</Typography>
                      <Typography variant="caption">{guide.caption}</Typography>
                    </div>
                  </Button>
                );
              } else {
                return (
                  <Button
                    variant="outlined"
                    color={guide.beginner ? 'secondary' : 'primary'}
                    href={guide.link}
                    target="_blank"
                    key={guide.title}
                  >
                    <div className={classes.specialButton}>
                      <Typography>{guide.title}</Typography>
                      <Typography variant="caption">{guide.caption}</Typography>
                    </div>
                  </Button>
                );
              }
            })}
        </div>
      </div>
    </Paper>
  );
};
