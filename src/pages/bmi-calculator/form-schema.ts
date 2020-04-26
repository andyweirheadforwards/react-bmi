import { TextFieldProps } from '@material-ui/core';
import { ReactNode } from 'react';

const minHeight = 30;
const maxHeight = 300;

const minWeight = 5;
const maxWeight = 600;

export type FieldSettings = {
  field: TextFieldProps;
  helperText: string;
  getErrorMessage: (value: string) => ReactNode | null;
};

export type FormSchema = {
  [field: string]: FieldSettings;
};

export type FormData = {
  [key: string]: string | null;
};
export interface BmiFormData extends FormData {
  height: string | null;
  weight: string | null;
}

export function isFormValid(schema: FormSchema, formData: FormData) {
  return !Object.keys(schema).find(key => schema[key].getErrorMessage(formData[key] || ''));
}

const schema: FormSchema = {
  height: {
    field: {
      label: 'Height?',
      name: 'height',
      required: true,
      inputProps: {
        min: minHeight,
        max: maxHeight,
        step: 1,
        type: 'number',
      },
    },
    helperText: 'Height in cm.',
    getErrorMessage: getHeightError,
  },
  weight: {
    field: {
      label: 'Weight?',
      name: 'weight',
      required: true,
      inputProps: {
        min: minWeight,
        max: maxWeight,
        step: 1,
        type: 'number',
      },
    },
    helperText: 'Weight in cm.',
    getErrorMessage: getWeightError,
  },
};

function getHeightError(value: string): ReactNode | null {
  let error;
  const height = parseInt(value, 10);

  switch (true) {
    case !height:
      error = 'Height is required.';
      break;
    case height < minHeight:
      error = `Height must be at least ${minHeight}cm.`;
      break;
    case height > maxHeight:
      error = `Height must be no more than ${maxHeight}cm.`;
      break;
    default:
      error = null;
  }

  return error;
}

function getWeightError(value: string): ReactNode | null {
  let error;
  const weight = parseInt(value, 10);

  switch (true) {
    case !weight:
      error = 'Weight is required.';
      break;
    case weight < minWeight:
      error = `Weight must be at least ${minWeight}kg.`;
      break;
    case weight > maxWeight:
      error = `Weight must be no more than ${maxWeight}kg.`;
      break;
    default:
      error = null;
  }

  return error;
}

export default schema;
