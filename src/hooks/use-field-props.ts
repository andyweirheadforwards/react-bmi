import { TextFieldProps } from '@material-ui/core';
import { ChangeEventHandler, FocusEventHandler, ReactNode, useState } from 'react';

import { RbcFieldSettings } from '../pages/bmi-calculator/form-schema';

const useFieldProps = (
  fieldSettings: RbcFieldSettings,
  value: string | null,
  onValueChange: (field: string, value: string) => void
): TextFieldProps => {
  const { field, helperText, getErrorMessage } = fieldSettings;
  const { name } = field;
  const [errorMessage, setErrorMessage] = useState<ReactNode | null>(null);
  const error = !!errorMessage;
  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value: changeValue } }) => {
    error && setErrorMessage(getErrorMessage(changeValue));
    onValueChange(name, changeValue);
  };
  const onBlur: FocusEventHandler<HTMLInputElement> = ({ target: { value: blurValue } }) =>
    setErrorMessage(getErrorMessage(blurValue));

  return {
    ...field,
    value: value || '',
    onChange,
    onBlur,
    error,
    helperText: errorMessage || helperText,
  };
};

export default useFieldProps;
