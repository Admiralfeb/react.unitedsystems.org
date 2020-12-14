import { useEffect, useState } from 'react';
import { IQuery, OtherFilters } from 'models/shipBuilds';

import { Paper } from '@material-ui/core';
import { QuerySpecialization } from './querySpecialities';
import { QueryShip } from './queryShip';
import { QueryEngineering } from './queryEngineering';
import { QueryOther } from './queryOther';
import { useUrlQuery } from 'hooks/useURLQuery';
import { useQueryStyles } from './queryStyles';
import { QueryActions } from './queryButtons';

export const Query = (props: { updateQuery: (query: IQuery) => void }) => {
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
  let urlQuery = useUrlQuery();
  const { updateQuery } = props;
  const classes = useQueryStyles();

  useEffect(() => {
    const queryParam = urlQuery.get('beginner');
    if (queryParam === 'true') {
      setOther({ ...other, beginner: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const query: IQuery = {
      ship: shipType,
      size: shipSize,
      engLevel,
      specialties: selectedSpecialties,
      other,
    };
    console.log(query);
    updateQuery(query);
  }, [shipType, shipSize, engLevel, selectedSpecialties, other, updateQuery]);

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
    <Paper className={classes.root}>
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
      <QueryActions resetQueries={resetQueries} />
    </Paper>
  );
};
