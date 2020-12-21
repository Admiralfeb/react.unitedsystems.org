import { Typography } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { ShipSpecialty } from 'models/shipBuilds/shipSpecialty';
import { Dispatch, SetStateAction } from 'react';
import { useQueryStyles } from './queryStyles';

export const QuerySpecialization = (props: {
  selectedSpecialties: string[];
  setSpecialties: Dispatch<SetStateAction<string[]>>;
}) => {
  const { selectedSpecialties, setSpecialties } = props;
  const classes = useQueryStyles();

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
    <div className={classes.querySection}>
      <h3 className={classes.querySectionheader}>Ship Specializations</h3>

      <Typography className={classes.queryExplanationText}>
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
