import { makeStyles, Typography } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { ShipSpecialty } from 'models/shipBuilds/shipSpecialty';
import { Dispatch, SetStateAction } from 'react';
import { useSharedStyles } from './sharedStyles';

const useStyles = makeStyles((theme) => ({
  querySpecialtyButtons: {
    display: 'grid',
    gridTemplate: '1fr 1fr 1fr 1fr 1fr / 1fr 1fr',
    '& button': {
      margin: '3px',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplate: '1fr 1fr / 1fr 1fr 1fr 1fr 1fr',
    },
  },
}));

export const QuerySpecialization = (props: {
  selectedSpecialties: string[];
  setSpecialties: Dispatch<SetStateAction<string[]>>;
}) => {
  const { selectedSpecialties, setSpecialties } = props;
  const sharedClasses = useSharedStyles();
  const classes = useStyles();

  const handleSpecialties = (special: string) => {
    let newSpecials: string[] = [];
    if (selectedSpecialties.includes(special)) {
      newSpecials = selectedSpecialties.filter((v) => v !== special);
    } else {
      newSpecials = [...selectedSpecialties, special];
    }
    setSpecialties(newSpecials);
  };

  return (
    <div className={sharedClasses.querySection}>
      <h3 className={sharedClasses.querySectionheader}>Ship Specializations</h3>

      <Typography className={sharedClasses.queryExplanationText}>
        Select specializations that the ship should fulfill.
      </Typography>

      <div className={classes.querySpecialtyButtons}>
        {getSpecialties().map((special) => (
          <ToggleButton
            value={special}
            key={special}
            selected={selectedSpecialties.includes(special)}
            onChange={() => handleSpecialties(special)}
          >
            {special}
          </ToggleButton>
        ))}
      </div>
    </div>
  );
};

const getSpecialties = (): string[] => {
  let specialties: string[] = [];

  for (const speciality in ShipSpecialty) {
    specialties = [
      ...specialties,
      ShipSpecialty[speciality as keyof typeof ShipSpecialty],
    ];
  }
  return specialties;
};
