import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import './buildCard.css';
import { Chip } from '@material-ui/core';
import { getShipInfofromID } from '../../functions/getShipInfo';
import { IShipInfo } from '../../models/shipInfo';
import { IBuildInfo, ShipSize } from '../../models';
import { EngIcons } from './engIcons';
import { NavLink } from 'react-router-dom';

export const BuildCard = (props: IBuildInfo) => {
  const [shipInfo, setShipInfo] = useState<IShipInfo>();

  useEffect(() => setShipInfo(getShipInfofromID(props.ship!)), [props.ship]);

  return (
    <Card variant="outlined" className="card">
      {shipInfo && (
        <CardMedia
          className="shipImg"
          image={shipInfo?.shipImg}
          title={shipInfo?.name}
        />
      )}
      <CardContent className="cardContent">
        <Typography>{props.description}</Typography>
        <Divider />
        <div className="shipName">
          <Typography>{shipInfo?.name} </Typography>
          <div className="spacer" />
          {shipInfo && <Typography>{ShipSize[shipInfo.size]}</Typography>}
        </div>
        {shipInfo?.requires && (
          <Typography>Requirement: {shipInfo.requires}</Typography>
        )}
        <TagGroup
          tags={props.specializations}
          guardian={props.guardian}
          powerplay={props.powerplay}
          beginner={props.beginner}
        />
        <Divider />
        <EngIcons engLevel={props.engLevel} />
        <Divider />
        <Typography>Author: {props.author}</Typography>
        <CardActions className="cardActions">
          <Button
            variant="contained"
            color="secondary"
            href={props.buildLink}
            target="_blank"
          >
            View Build
          </Button>{' '}
          <Button
            to={`/information/builds/detail/${
              (props._id as unknown) as string
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
  );
};

const TagGroup = (props: {
  tags: string[];
  guardian: boolean;
  powerplay: boolean;
  beginner: boolean;
}) => {
  return (
    <div className="chips">
      {props.tags.map((v) => (
        <Chip label={v} key={v} />
      ))}
      {props.guardian && <Chip label="Guardian" key="guardian" />}
      {props.powerplay && <Chip label="PowerPlay" key="powerplay" />}
      {props.beginner && <Chip label="Beginner" key="beginner" />}
    </div>
  );
};
