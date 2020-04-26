import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  InputAdornment,
  OutlinedTextFieldProps,
  TextField,
} from '@material-ui/core';
import React, { FC, FormEventHandler, useCallback, useState } from 'react';

import Loading from '../../components/loading/Loading';
import useFieldProps from '../../hooks/use-field-props';
import useForm from '../../hooks/use-form';
import schema, { isFormValid, RbcBmiFormData } from './form-schema';
import { getBmi } from './service';

const { height: heightSchema, weight: weightSchema } = schema;

const defaultBmiData: RbcBmiFormData = {
  height: null,
  weight: null,
};

const BmiCalculatorForm: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { formData, setField, setFormData } = useForm(defaultBmiData);

  const { height, weight } = formData;

  const heightProps = useFieldProps(heightSchema, height, setField);
  const weightProps = useFieldProps(weightSchema, weight, setField);

  const isValid = isFormValid(schema, formData);

  const buttonDisabled = !isValid || isLoading;

  const handleResponse = useCallback(({ bmi }) => alert(`Your BMI is: ${bmi}`), []);
  const handleError = useCallback(error => alert(error), []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    event => {
      event.preventDefault();

      Promise.resolve()
        .then(() => getBmi(formData as RbcBmiFormData, setLoading))
        .then(handleResponse)
        .catch(handleError)
        .finally(() => setFormData(defaultBmiData));
    },
    [formData, setLoading, setFormData, handleResponse, handleError]
  );

  return (
    <>
      {isLoading && <Loading />}
      <Card>
        <CardHeader title="BMI Calculator" />
        <form onSubmit={handleSubmit}>
          <CardContent>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              }}
              {...(heightProps as OutlinedTextFieldProps)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
              {...(weightProps as OutlinedTextFieldProps)}
            />
          </CardContent>
          <CardActions>
            <Button type="submit" color="primary" fullWidth disabled={buttonDisabled}>
              Get BMI
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default BmiCalculatorForm;
