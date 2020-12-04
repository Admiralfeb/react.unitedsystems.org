import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import engineerIcon from '../assets/Engineer_icon.svg';
import './buildItem.css';
import { Chip } from '@material-ui/core';
import { getShipInfofromID } from '../functions/getShipInfo';
import { IShipInfo } from '../models/shipInfo';
import { ShipSize } from '../models';
import { MoreInfoDialog } from './moreInfoDialog';

interface IBuildItemProps {
  id: number;
  author: string;
  specializations: string[];
  engLevel: number;
  description: string;
  buildLink: string;
  guardian: boolean;
  powerplay: boolean;
  beginner: boolean;
  moreInfo?: string;
}

export const BuildItem = (props: IBuildItemProps) => {
  const [shipInfo, setShipInfo] = useState<IShipInfo>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  useEffect(() => setShipInfo(getShipInfofromID(props.id)), [props.id]);

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  return (
    <Card variant='outlined' className='card'>
      {shipInfo && (
        <CardMedia
          className='shipImg'
          image={shipInfo?.shipImg}
          title={shipInfo?.name}
        />
      )}
      <CardContent className='cardContent'>
        <Typography>{props.description}</Typography>
        <Divider />
        <div className='shipName'>
          <Typography>{shipInfo?.name} </Typography>
          <div className='spacer' />
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
        <CardActions className='cardActions'>
          <Button
            variant='contained'
            color='secondary'
            href={props.buildLink}
            target='_blank'>
            View Build
          </Button>{' '}
          {props.moreInfo && (
            <>
              <Button
                variant='contained'
                color='primary'
                onClick={handleShowDialog}>
                More Info
              </Button>
              <MoreInfoDialog
                content={props.moreInfo!}
                open={showDialog}
                setOpen={setShowDialog}
              />
            </>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

const EngIcons = (props: { engLevel: number }) => {
  let icons: JSX.Element[] = [];
  if (props.engLevel > 3 || props.engLevel < 1) {
    return (
      <div className='engineering'>
        <p>Engineering Level: None</p>
      </div>
    );
  } else {
    for (let i = 1; i <= props.engLevel; i++) {
      icons = [
        ...icons,
        <img src={engineerIcon} key={i} alt='Engineering Icon' />,
      ];
    }
    return (
      <div className='engineering'>
        <p>
          <span>Engineering Level:</span> {icons.map((icon) => icon)}
        </p>
      </div>
    );
  }
};

const TagGroup = (props: {
  tags: string[];
  guardian: boolean;
  powerplay: boolean;
  beginner: boolean;
}) => {
  return (
    <div className='chips'>
      {props.tags.map((v) => (
        <Chip label={v} key={v} />
      ))}
      {props.guardian && <Chip label='Guardian' key='guardian' />}
      {props.powerplay && <Chip label='PowerPlay' key='powerplay' />}
      {props.beginner && <Chip label='Beginner' key='beginner' />}
    </div>
  );
};
