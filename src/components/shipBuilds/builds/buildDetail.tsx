import { getShipInfofromID } from 'functions/shipBuilds';
import { useShipBuilds } from 'hooks/shipBuilds/useShipBuilds';
import { IShipInfo } from 'models/shipBuilds';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EDSpinner } from '@admiralfeb/react-components';
import { NotFound } from 'components';
import {
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { BuildDetailFull } from './buildDetailFull';
import { BuildDetailMobile } from './buildDetailMobile';
import { BuildDetailBuilds } from './buildDetailBuilds';

interface RouteParams {
  id: string;
}

const useStyles = makeStyles({
  textCenter: {
    textAlign: 'center',
  },
});

export const BuildDetail = () => {
  const { loading, shipBuilds } = useShipBuilds();
  let { id } = useParams<RouteParams>();
  const [shipInfo, setShipInfo] = useState<IShipInfo>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

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

  if (loading) {
    return <EDSpinner />;
  }

  return (
    <>
      <Typography variant="h3" className={classes.textCenter}>
        Build Detail
      </Typography>
      {foundBuild ? (
        isMobile ? (
          <BuildDetailMobile foundBuild={foundBuild} shipInfo={shipInfo} />
        ) : (
          <BuildDetailFull foundBuild={foundBuild} shipInfo={shipInfo} />
        )
      ) : (
        <NotFound />
      )}
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
  );
};
