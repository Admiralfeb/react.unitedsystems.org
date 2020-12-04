import { Typography } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { ShipSpecialty } from '../models/shipSpecialty';

export const QuerySpecialization = (props: {
  selectedSpecialties: string[];
  setSpecialties: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const { selectedSpecialties, setSpecialties } = props;

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
    <div className='specializationQuery'>
      <h3 className='queryHeader'>Ship Specializations</h3>

      <Typography>
        Select specializations that the ship should fulfill.
      </Typography>

      <div className='specialButtons'>
        {getSpecialties().map((special) => (
          <ToggleButton
            value={special}
            key={special}
            selected={selectedSpecialties.includes(special)}
            onChange={() => handleSpecialties(special)}>
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
