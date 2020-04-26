import axios from 'axios';

import { RbcBmiFormData } from './form-schema';

export interface RbcBmiPostData {
  height: number;
  weight: number;
}

export function getBmi(formData: RbcBmiFormData, setLoading: (loading: boolean) => void) {
  const postData = getPostData(formData);

  setLoading(true);

  return Promise.resolve()
    .then(() => axios.post('/bmi', postData))
    .then(({ data }) => data)
    .finally(() => setLoading(false));
}

export function getPostData({ height, weight }: RbcBmiFormData): RbcBmiPostData {
  return {
    height: parseFloat(height || '') / 100,
    weight: parseFloat(weight || ''),
  };
}
