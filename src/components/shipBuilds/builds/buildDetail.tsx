import {
  Button,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { useEffect, useMemo, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { NotFound } from '../..';
import { getShipInfofromID } from 'functions/shipBuilds/getShipInfo';
import { useShipBuilds } from 'hooks/shipBuilds/useShipBuilds';
import { IShipInfo, ShipSize } from 'models/shipBuilds';
import { BuildDetailBuilds } from './buildDetailBuilds';
import { TagGroup } from './tagGroup';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { EDSpinner } from '@admiralfeb/react-components';

interface RouteParams {
  id: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80%',
    margin: 'auto',
    padding: 10,
    marginBottom: 5,
  },
  img: {
    width: 300,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  flexDown: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexAcross: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  spacer: {
    flexGrow: 1,
  },
  gridDown: {
    display: 'grid',
    gridTemplate: 'auto / 1fr',
    gap: '5px',
  },
  margin: {
    margin: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
}));

export const BuildDetail = () => {
  const { loading, shipBuilds } = useShipBuilds();
  let { id } = useParams<RouteParams>();
  const classes = useStyles();
  const [shipInfo, setShipInfo] = useState<IShipInfo>();

  let foundBuild = useMemo(() => {
    if (loading) {
      return undefined;
    }

    let build = shipBuilds.find(
      (x) => x._id && ((x._id as unknown) as string) === id
    );
    if (build) {
      return build;
    } else {
      return null;
    }
  }, [id, loading, shipBuilds]);

  useEffect(() => {
    if (foundBuild) {
      const info = getShipInfofromID(foundBuild.shipId);
      setShipInfo(info);
    }
  }, [foundBuild]);

  return (
    <>
      <Typography variant="h3" className={classes.textCenter}>
        Build Detail
      </Typography>
      {loading ? (
        <EDSpinner />
      ) : foundBuild === null ? (
        <NotFound />
      ) : (
        <>
          <Paper className={`${classes.paper} ${classes.flexAcross}`}>
            {shipInfo && (
              <div className={`${classes.flexDown} ${classes.margin}`}>
                <img
                  src={shipInfo.shipImg}
                  alt={shipInfo.name}
                  className={classes.img}
                />
                <div className={classes.flexAcross}>
                  <Typography>{shipInfo.name}</Typography>
                  <span className={classes.spacer} />
                  <Typography>{ShipSize[shipInfo.size]}</Typography>
                </div>
                {shipInfo.requires && (
                  <Typography>Requires: {shipInfo.requires}</Typography>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  href={shipInfo.shipReview}
                  target="_blank"
                >
                  Pilot's Review
                </Button>
              </div>
            )}
            <Divider orientation="vertical" flexItem />
            <div
              className={`${classes.flexDown} ${classes.spacer} ${classes.margin}`}
            >
              <Typography variant="h5">{foundBuild?.title}</Typography>
              <Typography>Author: {foundBuild?.author}</Typography>
              <TagGroup build={foundBuild!} />
              {foundBuild?.description && (
                <ReactMarkdown
                  plugins={[gfm]}
                  renderers={{ paragraph: Typography }}
                  children={foundBuild.description}
                />
              )}
            </div>
            <div
              className={`${classes.flexDown} ${classes.spacer} ${classes.textCenter}`}
            >
              <div className={classes.gridDown}>
                <Button
                  variant="contained"
                  color="primary"
                  href={foundBuild!.buildLink}
                  target="_blank"
                >
                  Open Coriolis
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  to={`/information/builds/add?type=variant&refID=${
                    (foundBuild!._id as unknown) as string
                  }`}
                  component={NavLink}
                >
                  Add Variant
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  to={`/information/builds/add?type=related&refID=${
                    (foundBuild!._id as unknown) as string
                  }`}
                  component={NavLink}
                >
                  Add Related
                </Button>
              </div>
            </div>
          </Paper>
          {foundBuild && foundBuild.variants.length > 0 ? (
            <BuildDetailBuilds
              title="Build Variants"
              buildIDs={foundBuild.variants}
            />
          ) : null}
          {foundBuild && foundBuild.related.length > 0 ? (
            <BuildDetailBuilds
              title="Related Builds"
              buildIDs={foundBuild.related}
            />
          ) : null}
        </>
      )}
    </>
  );
};
