import { TextField } from '@material-ui/core';
import { ChangeEvent } from 'react';

interface IBuildAddText {
  id: string;
  label: string;
  isMultiline: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const BuildAddText = (props: IBuildAddText) => {
  const { id, label, value, onChange, isMultiline } = props;
  return (
    <TextField
      variant="outlined"
      id={id}
      label={label}
      multiline={isMultiline}
      value={value}
      onChange={onChange}
    />
  );
};
