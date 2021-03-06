import { InputAdornment, OutlinedTextFieldProps } from '@material-ui/core';
import React, { FC, FormEventHandler, useCallback, useState } from 'react';

import RbcFormCard, { RbcFormCardProps } from '../../components/forms/rbc-form-card';
import RbcTextField from '../../components/forms/rbc-text-field';
import Loading from '../../components/loading/Loading';
import useFieldProps from '../../hooks/use-field-props';
import useForm from '../../hooks/use-form';
import schema, { defaultBmiData, isFormValid, RbcBmiFormData } from './form-schema';
import { getBmi, RbcGetBmiResponse } from './service';

const { height: heightSchema, weight: weightSchema } = schema;

const BmiCalculatorForm: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { formData, setField, setFormData } = useForm(defaultBmiData);

  const { height, weight } = formData;

  const heightProps = useFieldProps(heightSchema, height, setField) as OutlinedTextFieldProps;
  const weightProps = useFieldProps(weightSchema, weight, setField) as OutlinedTextFieldProps;

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    event => {
      event.preventDefault();

      const handleResponse = ({ bmi }: RbcGetBmiResponse) => alert(`Your BMI is: ${bmi}`);
      const handleError = (error: Error) => alert(error);

      Promise.resolve()
        .then(() => getBmi(formData as RbcBmiFormData, setLoading))
        .then(handleResponse)
        .then(() => setFormData(defaultBmiData))
        .catch(handleError);
    },
    [formData, setLoading, setFormData]
  );

  const formCardProps: RbcFormCardProps = {
    title: 'BMI Calculator',
    submitLabel: 'Get BMI',
    onSubmit: handleSubmit,
    canSubmit: isFormValid(schema, formData) && !isLoading,
  };

  return (
    <>
      {isLoading && <Loading />}
      <RbcFormCard {...formCardProps}>
        <RbcTextField
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          {...heightProps}
        />
        <RbcTextField
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
          {...weightProps}
        />
      </RbcFormCard>
    </>
  );
};

export default BmiCalculatorForm;
