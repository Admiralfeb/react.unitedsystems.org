import { Typography } from '@material-ui/core';
import { SetStateAction, MouseEvent } from 'react';
import { EngToggleGroup } from '../engToggleGroup';

export const QueryEngineering = (props: {
  engLevel: number | null;
  setEngLevel: React.Dispatch<SetStateAction<number | null>>;
}) => {
  const { engLevel, setEngLevel } = props;

  const handleEngLevelChange = (
    _: MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setEngLevel(newValue);
  };

  return (
    <div className="engineeringQuery">
      <h3 className="queryHeader">Ship Engineering Level</h3>
      <Typography>
        Select Engineering level ranging from None to Max Engineering.
      </Typography>
      <EngToggleGroup
        engLevel={engLevel}
        handleEngLevelChange={handleEngLevelChange}
      />
    </div>
  );
};
