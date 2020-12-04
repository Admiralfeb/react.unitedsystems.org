import { Button, FormGroup, makeStyles } from '@material-ui/core';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { processJSONBuild } from '../../functions/processJSONBuild';
import { getShipInfofromName } from '../../functions/getShipInfo';
import { useAddBuild } from '../../hooks/useAddBuild';
import { IBuildInfoInsert } from '../../models/buildInfoInsert';
import { ObjectId } from 'bson';
import { QuerySpecialization } from '../query/querySpecialities';
import { useSnackbar } from 'notistack';
import { EngToggleGroup } from '../engToggleGroup';
import { BuildAddText } from './buildAddText';
import { IShipInfo } from '../../models';
import { ShipAutocomplete } from '../shipAutocomplete';
import { BuildCheckBox } from './buildCheckBox';

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

export const BuildAdd = () => {
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
  const handleShipChange = (_: ChangeEvent<{}>, value: IShipInfo | null) => {
    const ship = value!.id;
    setBuildInfo((buildInfo) => {
      return { ...buildInfo, ship };
    });
  };
  const handleEngLevelChange = (
    _: MouseEvent<HTMLElement>,
    engLevel: number
  ) => {
    setBuildInfo({ ...buildInfo, engLevel });
  };
  const handleOtherChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBuildInfo({ ...buildInfo, [event.target.name]: event.target.checked });
  };
  const handleSubmit = async () => {
    try {
      await addBuild(buildInfo);
      enqueueSnackbar('Build Successfully Submitted', { variant: 'success' });
      setBuildInfo(DEFAULTBUILD);
      setSpecialties([]);
      setJsonBuild('');
    } catch (e) {
      enqueueSnackbar('Submit Failed', { variant: 'error' });
      console.error(e);
    }
  };

  const textFields = [
    {
      id: 'json',
      label: 'Exported JSON',
      isMultiline: true,
      value: jsonBuild,
      onChange: handleJSONChange,
    },
    {
      id: 'description',
      label: 'Title/Description',
      isMultiline: false,
      value: buildInfo.description,
      onChange: handleTextChange,
    },
    {
      id: 'moreInfo',
      label: 'More Information',
      isMultiline: true,
      value: buildInfo.moreInfo,
      onChange: handleTextChange,
    },
    {
      id: 'buildLink',
      label: 'Build Link - Full',
      isMultiline: false,
      value: buildInfo.buildLink,
      onChange: handleTextChange,
    },
    {
      id: 'author',
      label: 'Author',
      isMultiline: false,
      value: buildInfo.author,
      onChange: handleTextChange,
    },
  ];

  const checkFields = [
    { label: 'Guardian', name: 'guardian', checked: buildInfo.guardian },
    { label: 'PowerPlay', name: 'powerplay', checked: buildInfo.powerplay },
    { label: 'Beginner', name: 'beginner', checked: buildInfo.beginner },
  ];

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
      {textFields.map((field) => (
        <BuildAddText {...field} />
      ))}
      <ShipAutocomplete
        shipType={buildInfo.ship}
        handleShipChange={handleShipChange}
      />
      <QuerySpecialization
        selectedSpecialties={buildInfo.specializations}
        setSpecialties={setSpecialties}
      />
      <EngToggleGroup
        engLevel={buildInfo.engLevel}
        handleEngLevelChange={handleEngLevelChange}
      />
      <FormGroup row>
        {checkFields.map((check) => (
          <BuildCheckBox {...check} onChange={handleOtherChange} />
        ))}
      </FormGroup>
      <Button onClick={handleSubmit}>Submit Build</Button>
    </div>
  );
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
