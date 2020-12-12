import { useEffect, useState } from 'react';
import { IQuery } from '../../models';

import './query.css';

import { Button, Paper } from '@material-ui/core';
import { QuerySpecialization } from './querySpecialities';
import { QueryShip } from './queryShip';
import { QueryEngineering } from './queryEngineering';
import { QueryOther } from './queryOther';
import { OtherFilters } from '../../models/otherFilters';
import { NavLink } from 'react-router-dom';
import { useUrlQuery } from '../../hooks/useURLQuery';

export const Query = (props: { queryUpdate: (query: IQuery) => void }) => {
  const [shipType, setShipType] = useState<string | null>(null);
  const [shipSize, setShipSize] = useState<number | null>(null);
  const [engLevel, setEngLevel] = useState<number | null>(null);
  const [selectedSpecialties, setSpecialties] = useState<string[]>([]);
  const [other, setOther] = useState<OtherFilters>({
    guardian: null,
    powerplay: null,
    beginner: null,
    showVariants: null,
  });
  let query = useUrlQuery();

  useEffect(() => {
    const queryParam = query.get('beginner');
    if (queryParam === 'true') {
      setOther({ ...other, beginner: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { queryUpdate } = props;
    const query: IQuery = {
      ship: shipType,
      size: shipSize,
      engLevel,
      specialties: selectedSpecialties,
      other,
    };
    queryUpdate(query);
    // Disable eslint. Props is not missing from dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shipType, shipSize, engLevel, selectedSpecialties, other]);

  const resetQueries = () => {
    setShipType(null);
    setShipSize(null);
    setEngLevel(null);
    setSpecialties([]);
    setOther({
      guardian: null,
      powerplay: null,
      beginner: null,
      showVariants: null,
    });
  };

  return (
    <Paper className="query">
      <QuerySpecialization
        selectedSpecialties={selectedSpecialties}
        setSpecialties={setSpecialties}
      />
      <QueryShip
        shipType={shipType}
        setShipType={setShipType}
        shipSize={shipSize}
        setShipSize={setShipSize}
      />
      <QueryEngineering engLevel={engLevel} setEngLevel={setEngLevel} />
      <QueryOther other={other} setOther={setOther} />
      <div className="reset">
        <Button
          onClick={resetQueries}
          color="primary"
          variant="outlined"
          className="resetButton"
        >
          Reset Selections
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={NavLink}
          to="/information/builds/add"
        >
          Add Build
        </Button>
      </div>
    </Paper>
  );
};
