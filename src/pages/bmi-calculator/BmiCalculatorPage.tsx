import { Button, TextField } from '@material-ui/core';
import React, { FC, FormEventHandler, useCallback, useState } from 'react';

import Loading from '../../components/loading/Loading';
import useFieldProps from '../../hooks/use-field-props';
import useForm from '../../hooks/use-form';
import styles from './BmiCalculatorPage.module.scss';
import schema, { BmiFormData, isFormValid } from './form-schema';
import { getBmi } from './service';

const { height: heightSchema, weight: weightSchema } = schema;

const defaultBmiData: BmiFormData = {
  height: null,
  weight: null,
};

const BmiCalculatorPage: FC = () => {
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
        .then(() => getBmi(formData as BmiFormData, setLoading))
        .then(handleResponse)
        .catch(handleError)
        .finally(() => setFormData(defaultBmiData));
    },
    [formData, setLoading, setFormData, handleResponse, handleError]
  );

  return (
    <>
      {isLoading && <Loading />}
      <form className={styles.bmiForm} onSubmit={handleSubmit}>
        <TextField {...heightProps} />
        <TextField {...weightProps} />
        <Button type="submit" variant="contained" color="primary" disabled={buttonDisabled}>
          Get BMI
        </Button>
      </form>
    </>
  );
};

export default BmiCalculatorPage;
