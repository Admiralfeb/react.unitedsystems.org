import {
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { ChangeEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { processJSONBuild } from '../../functions/processJSONBuild';
import { getShipInfofromName } from '../../functions/getShipInfo';
import { sortItems } from '../../functions/sort';
import Ships from '../../assets/shipMap.json';
import {
  Autocomplete,
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/lab';
import BlockIcon from '@material-ui/icons/Block';
import engineerIcon from '../../assets/Engineer_icon.svg';
import { useAddBuild } from '../../hooks/useAddBuild';
import { IBuildInfoInsert } from '../../models/buildInfoInsert';
import { ObjectId } from 'bson';
import { QuerySpecialization } from '../query/querySpecialities';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    display: 'grid',
    gridTemplate: 'auto / 1fr',
    rowGap: '10px',
    width: '90%',
    margin: 'auto',
  },
});

export const AddBuild = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [jsonBuild, setJsonBuild] = useState('');
  const [buildInfo, setBuildInfo] = useState<IBuildInfoInsert>(DEFAULTBUILD);
  const [specialties, setSpecialties] = useState<string[]>([]);
  const addBuild = useAddBuild();

  useEffect(() => {
    setBuildInfo((buildInfo) => {
      return { ...buildInfo, specializations: specialties };
    });
  }, [specialties]);

  const handleJSONChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJsonBuild(event.target.value);
    const {
      buildName,
      shipName,
      guardian,
      powerplay,
      engineering,
      url,
    } = processJSONBuild(event.target.value);
    const engLevel = engineering ? 1 : 0;
    const shipInfo = getShipInfofromName(shipName)!;
    const _id = buildInfo._id;
    const info: IBuildInfoInsert = {
      _id,
      id: 0,
      description: buildName,
      guardian,
      powerplay,
      buildLink: url,
      ship: shipInfo.id,
      author: '',
      specializations: [],
      engLevel,
      beginner: false,
      moreInfo: '',
    };
    setBuildInfo(info);
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    switch (event.target.id) {
      case 'description':
        setBuildInfo({ ...buildInfo, description: value });
        break;
      case 'moreInfo':
        setBuildInfo({ ...buildInfo, moreInfo: value });
        break;
      case 'buildLink':
        setBuildInfo({ ...buildInfo, buildLink: value });
        break;
      case 'author':
        setBuildInfo({ ...buildInfo, author: value });
        break;
      default:
        break;
    }
  };

  const handleEngLevelChange = (
    _: React.MouseEvent<HTMLElement>,
    engLevel: number
  ) => {
    setBuildInfo({ ...buildInfo, engLevel });
  };
  const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuildInfo({ ...buildInfo, [event.target.name]: event.target.checked });
  };
  const handleSubmit = async () => {
    try {
      await addBuild(buildInfo);
      enqueueSnackbar('Build Successfully Submitted', { variant: 'success' });
      setBuildInfo(DEFAULTBUILD);
      setJsonBuild('');
    } catch (e) {
      enqueueSnackbar('Submit Failed', { variant: 'error' });
      console.error(e);
    }
  };

  return (
    <div className={classes.root}>
      <Button
        to="/information/builds"
        component={NavLink}
        color="secondary"
        variant="outlined"
      >
        Return to builds
      </Button>
      {jsonBuild === '' && (
        <TextField
          label="Exported JSON"
          multiline
          value={jsonBuild}
          onChange={handleJSONChange}
        />
      )}
      <TextField
        id="description"
        label="Title/Description"
        value={buildInfo.description}
        onChange={handleTextChange}
      />
      <TextField
        id="moreInfo"
        label="More Information"
        multiline
        value={buildInfo.moreInfo}
        onChange={handleTextChange}
      />
      <TextField
        id="buildLink"
        label="Build Link - Full Link"
        value={buildInfo.buildLink}
        onChange={handleTextChange}
      />
      <TextField
        id="author"
        label="Author"
        value={buildInfo.author}
        onChange={handleTextChange}
      />
      <Autocomplete
        id="shipType"
        options={sortItems(Ships, 'name')}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <>
            <span>{option.name}</span>
          </>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ship Type"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autocomplete: 'new-password',
            }}
          />
        )}
        value={findShipName(buildInfo.ship)}
        onChange={(_, value) => {
          const ship = value!.id;
          setBuildInfo({ ...buildInfo, ship });
        }}
      />
      <QuerySpecialization
        selectedSpecialties={specialties}
        setSpecialties={setSpecialties}
      />
      <ToggleButtonGroup
        value={buildInfo.engLevel}
        exclusive
        onChange={handleEngLevelChange}
      >
        <ToggleButton value={0}>
          <Tooltip title="No Engineering" arrow>
            <div className="engButton">
              <BlockIcon />
            </div>
          </Tooltip>
        </ToggleButton>
        <ToggleButton value={1}>
          <Tooltip title="Simple Engineering" arrow>
            <div className="engButton">
              <img src={engineerIcon} alt="engineeringIcon" />
            </div>
          </Tooltip>
        </ToggleButton>
        <ToggleButton value={2}>
          <Tooltip title="Moderate Engineering" arrow>
            <div className="engButton">
              <img src={engineerIcon} alt="engineeringIcon" />
              <img src={engineerIcon} alt="engineeringIcon" />
            </div>
          </Tooltip>
        </ToggleButton>
        <ToggleButton value={3}>
          <Tooltip title="End-Game/Extreme Engineering" arrow>
            <div className="engButton">
              <img src={engineerIcon} alt="engineeringIcon" />
              <img src={engineerIcon} alt="engineeringIcon" />
              <img src={engineerIcon} alt="engineeringIcon" />
            </div>
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
      <FormControlLabel
        label="Guardian"
        control={
          <Checkbox
            name="guardian"
            checked={buildInfo.guardian}
            onChange={handleOtherChange}
          />
        }
      />
      <FormControlLabel
        label="Powerplay"
        control={
          <Checkbox
            name="powerplay"
            checked={buildInfo.powerplay}
            onChange={handleOtherChange}
          />
        }
      />
      <FormControlLabel
        label="Beginner"
        control={
          <Checkbox
            name="beginner"
            checked={buildInfo.beginner}
            onChange={handleOtherChange}
          />
        }
      />
      <Button onClick={handleSubmit}>Submit Build</Button>
    </div>
  );
};

const findShipName = (shipID: number | null) => {
  if (shipID === null) {
    return null;
  }
  const shipName = Ships.find((x) => x.id === shipID);
  return shipName;
};

const DEFAULTBUILD: IBuildInfoInsert = {
  description: '',
  guardian: false,
  powerplay: false,
  buildLink: '',
  ship: 0,
  moreInfo: '',
  _id: new ObjectId(),
  id: 0,
  author: '',
  specializations: [],
  engLevel: 0,
  beginner: false,
};
