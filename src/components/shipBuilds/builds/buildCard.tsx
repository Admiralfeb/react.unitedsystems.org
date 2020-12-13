import './buildCard.css';
import {
  CardMedia,
  Divider,
  Typography,
  Button,
  CardActions,
  CardContent,
  Card,
} from '@material-ui/core';
import { IBuildInfov2, ShipSize } from 'models/shipBuilds';
import { EngIcons } from './engIcons';
import { NavLink } from 'react-router-dom';
import { useShipIdfromMap } from 'hooks/shipBuilds/useShipMap';
import { TagGroup } from './tagGroup';

export const BuildCard = (props: { shipBuild: IBuildInfov2 | undefined }) => {
  const { shipBuild } = props;
  const shipInfo = useShipIdfromMap(shipBuild?.shipId);

  return shipBuild && shipInfo ? (
    <Card variant="outlined" className="card">
      {shipInfo && (
        <CardMedia
          className="shipImg"
          image={shipInfo?.shipImg}
          title={shipInfo?.name}
        />
      )}
      <CardContent className="cardContent">
        <Typography>{shipBuild.title}</Typography>
        <Divider />
        <div className="shipName">
          <Typography>{shipInfo?.name} </Typography>
          <div className="spacer" />
          {shipInfo && <Typography>{ShipSize[shipInfo.size]}</Typography>}
        </div>
        {shipInfo?.requires && (
          <Typography>Requirement: {shipInfo.requires}</Typography>
        )}
        <TagGroup build={shipBuild} />
        <Divider />
        <EngIcons engLevel={shipBuild.engLevel} />
        <Divider />
        <Typography>Author: {shipBuild.author}</Typography>
        {shipBuild.variants.length > 0 ? (
          <Typography>Has Variants</Typography>
        ) : null}
        {shipBuild.related.length > 0 ? (
          <Typography>Has Related Builds</Typography>
        ) : null}
        <div className="spacer" />
        <CardActions className="cardActions">
          <Button
            variant="contained"
            color="secondary"
            href={shipBuild.buildLink}
            target="_blank"
          >
            View Build
          </Button>{' '}
          <Button
            to={`/information/builds/detail/${
              (shipBuild._id as unknown) as string
            }`}
            component={NavLink}
            color="primary"
            variant="contained"
            target="_blank"
          >
            View Details
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  ) : null;
};
