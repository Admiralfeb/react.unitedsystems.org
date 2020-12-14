import { Button, FormGroup, makeStyles, Typography } from '@material-ui/core';
import { ObjectId } from 'bson';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getShipInfofromName, processJSONBuild } from 'functions/shipBuilds';
import { IShipInfo, IBuildInfoInsert } from 'models/shipBuilds';
import { QuerySpecialization } from '../query/querySpecialities';
import { EngToggleGroup } from '../engToggleGroup';
import { BuildAddText } from './buildAddText';
import { ShipAutocomplete } from '../shipAutocomplete';
import { BuildCheckBox } from './buildCheckBox';
import { useShipBuilds } from 'hooks/shipBuilds/useShipBuilds';
import { useUrlQuery } from 'hooks/useURLQuery';
import { EDSpinner } from '@admiralfeb/react-components';
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

/**
 * Add Build Screen
 *
 * Used for all addition functions:
 *
 * - Normal Build
 * - Related Build
 * - Variant Build
 */
export const BuildAdd = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [jsonBuild, setJsonBuild] = useState('');
  const [buildInfo, setBuildInfo] = useState<IBuildInfoInsert>(DEFAULTBUILD);
  const [specialties, setSpecialties] = useState<string[]>([]);
  const {
    loading,
    shipBuilds,
    addBuild,
    addRelated,
    addVariant,
  } = useShipBuilds();
  const urlQuery = useUrlQuery();

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
      hasGuardian,
      hasPowerplay,
      engineering,
      url,
    } = processJSONBuild(event.target.value);
    const engLevel = engineering ? 1 : 0;
    const shipInfo = getShipInfofromName(shipName)!;
    const _id = buildInfo._id;
    const info: IBuildInfoInsert = {
      _id,
      title: buildName,
      hasGuardian,
      hasPowerplay,
      buildLink: url,
      shipId: shipInfo.shipId,
      author: '',
      specializations: [],
      engLevel,
      isBeginner: false,
      description: '',
      isVariant: false,
      variants: [],
      related: [],
      jsonBuild: event.target.value,
    };
    setBuildInfo(info);
  };
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    switch (event.target.id) {
      case 'title':
        setBuildInfo((info) => {
          return { ...info, title: value };
        });
        break;
      case 'description':
        setBuildInfo((info) => {
          return { ...info, description: value };
        });
        break;
      case 'buildLink':
        setBuildInfo((info) => {
          return { ...info, buildLink: value };
        });
        break;
      case 'author':
        setBuildInfo((info) => {
          return { ...info, author: value };
        });
        break;
      case 'variants':
        const variants = value.split(',').map((s) => s.trim());
        setBuildInfo((info) => {
          return { ...info, variants: variants };
        });
        break;
      case 'related':
        const related = value.split(',').map((s) => s.trim());
        setBuildInfo((info) => {
          return { ...info, related: related };
        });
        break;
      default:
        break;
    }
  };
  const handleShipChange = (_: ChangeEvent<{}>, value: IShipInfo | null) => {
    const ship = value!.shipId;
    setBuildInfo((buildInfo) => {
      return { ...buildInfo, shipId: ship };
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
    const addType = urlQuery.get('type');
    console.log(addType);
    const refID = urlQuery.get('refID');
    try {
      switch (addType) {
        case 'variant':
          if (refID) {
            await addVariant(refID, shipBuilds, buildInfo);
          } else {
            throw new Error('Build reference ID missing from URL');
          }
          break;
        case 'related':
          if (refID) {
            await addRelated(refID, shipBuilds, buildInfo);
          } else {
            throw new Error('Build reference ID missing from URL');
          }
          break;
        default:
          await addBuild(buildInfo);
          break;
      }
      enqueueSnackbar('Build Successfully Submitted', {
        variant: 'success',
      });
      setBuildInfo({ ...DEFAULTBUILD, _id: new ObjectId() });
      setSpecialties([]);
      setJsonBuild('');
    } catch (e) {
      enqueueSnackbar(`Submit Failed: ${e.message}`, { variant: 'error' });
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
      id: 'title',
      label: 'Title',
      isMultiline: false,
      value: buildInfo.title,
      onChange: handleTextChange,
      disabled: true,
    },
    {
      id: 'description',
      label: 'More Information - Accepts markdown',
      isMultiline: true,
      value: buildInfo.description,
      onChange: handleTextChange,
    },
    {
      id: 'buildLink',
      label: 'Build Link - Full',
      isMultiline: false,
      value: buildInfo.buildLink,
      onChange: handleTextChange,
      disabled: true,
    },
    // {
    //   id: 'variant',
    //   label: 'Variant Build IDs - If applicable - separated by commas',
    //   isMultiline: false,
    //   value: buildInfo.variants.join(','),
    //   onChange: handleTextChange,
    // },
    // {
    //   id: 'related',
    //   label: 'Related Build IDs - If applicable - separated by commas',
    //   isMultiline: false,
    //   value: buildInfo.related.join(','),
    //   onChange: handleTextChange,
    // },
    {
      id: 'author',
      label: 'Author',
      isMultiline: false,
      value: buildInfo.author,
      onChange: handleTextChange,
    },
  ];

  const checkFields = [
    {
      label: 'Guardian',
      name: 'hasGuardian',
      checked: buildInfo.hasGuardian,
      disabled: true,
    },
    {
      label: 'PowerPlay',
      name: 'hasPowerplay',
      checked: buildInfo.hasPowerplay,
      disabled: true,
    },
    { label: 'Beginner', name: 'isBeginner', checked: buildInfo.isBeginner },
  ];

  if (loading) {
    return <EDSpinner />;
  }

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
      <Typography>
        Save your build in Coriolis and choose Export. Paste the exported JSON
        into the Exported JSON field.
      </Typography>
      <Typography>
        Verify/enter remaining information and click Submit Build at the bottom.
      </Typography>
      {textFields.map((field) => (
        <BuildAddText key={field.id} {...field} />
      ))}
      <ShipAutocomplete
        shipType={buildInfo.shipId}
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
          <BuildCheckBox
            key={check.name}
            {...check}
            onChange={handleOtherChange}
          />
        ))}
      </FormGroup>
      <Button onClick={handleSubmit} variant="outlined">
        Submit Build
      </Button>
    </div>
  );
};

const DEFAULTBUILD: IBuildInfoInsert = {
  _id: new ObjectId(),
  shipId: 'adder',
  title: '',
  specializations: [],
  buildLink: '',
  engLevel: 0,
  hasGuardian: false,
  hasPowerplay: false,
  isBeginner: false,
  author: '',
  isVariant: false,
  variants: [],
  related: [],
  description: '',
  jsonBuild: '',
};
