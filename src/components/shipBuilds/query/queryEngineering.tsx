import { Typography } from '@material-ui/core';
import { SetStateAction, MouseEvent, Dispatch } from 'react';
import { EngToggleGroup } from '../engToggleGroup';
import { useQueryStyles } from './queryStyles';

export const QueryEngineering = (props: {
  engLevel: number | null;
  setEngLevel: Dispatch<SetStateAction<number | null>>;
}) => {
  const { engLevel, setEngLevel } = props;
  const classes = useQueryStyles();

  const handleEngLevelChange = (
    _: MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setEngLevel(newValue);
  };

  return (
    <div className={`${classes.querySection} ${classes.engineeringQuery}`}>
      <h3 className={classes.querySectionheader}>Ship Engineering Level</h3>
      <Typography className={classes.queryExplanationText}>
        Select Engineering level ranging from None to Max Engineering.
      </Typography>
      <div className={classes.toggleButtonCustom}>
        <EngToggleGroup
          engLevel={engLevel}
          handleEngLevelChange={handleEngLevelChange}
        />
      </div>
    </div>
  );
};
