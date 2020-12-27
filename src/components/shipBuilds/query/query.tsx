import { useEffect, useState } from 'react';
import { IQuery, OtherFilters } from 'models/shipBuilds';

import { makeStyles, Paper } from '@material-ui/core';
import { QuerySpecialization } from './querySpecialities';
import { QueryShip } from './queryShip';
import { QueryEngineering } from './queryEngineering';
import { QueryOther } from './queryOther';
import { useUrlQuery } from 'hooks/useURLQuery';
import { QueryActions } from './queryActions';
import qs from 'query-string';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    rowGap: '2px',
    width: '99%',
    gridTemplateAreas: `
    'specializations'
    'engineering'
    'ship'
    'other'
    'buttons'`,
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      gridTemplateAreas: `
        'specializations    engineering'
        'ship   other'
        'buttons    buttons'`,
      gridTemplateRows: '1fr 1fr 0.1fr',
      rowGap: '5px',
      columnGap: '5px',
    },
  },
}));

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
  const urlQuery = useUrlQuery();
  const history = useHistory();
  const { updateQuery } = props;
  const classes = useStyles();

  useEffect(() => {
    const queryParam = urlQuery.get('beginner');
    if (queryParam === 'true') {
      setOther({ ...other, beginner: 1 });
    }
  }, [other, urlQuery]);

  useEffect(() => {
    const query: IQuery = {
      ship: shipType,
      size: shipSize,
      engLevel,
      specialties: selectedSpecialties,
      ...other,
    };
    console.log(query);
    const queryString = qs.stringify(query);
    console.log(queryString);
    history.push(`/builds/?${queryString}`);
    updateQuery(query);
  }, [
    shipType,
    shipSize,
    engLevel,
    selectedSpecialties,
    other,
    updateQuery,
    history,
  ]);

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
