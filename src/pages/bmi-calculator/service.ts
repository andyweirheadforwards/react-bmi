import axios from 'axios';

import { BmiFormData } from './form-schema';

export interface BmiPostData {
  height: number;
  weight: number;
}

export function getBmi(formData: BmiFormData, setLoading: (loading: boolean) => void) {
  const postData = getPostData(formData);

  setLoading(true);

  return Promise.resolve()
    .then(() => axios.post('/bmi', postData))
    .then(({ data }) => data)
    .finally(() => setLoading(false));
}

export function getPostData({ height, weight }: BmiFormData): BmiPostData {
  return {
    height: parseFloat(height || '') / 100,
    weight: parseFloat(weight || ''),
  };
}
