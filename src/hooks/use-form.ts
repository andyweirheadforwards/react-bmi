import { useState } from 'react';

import { FormData } from '../pages/bmi-calculator/form-schema';

const useForm = (defaultData: FormData) => {
  const [formData, setFormData] = useState<FormData>(defaultData);

  const setField = (field: string, value: string): void =>
    setFormData({
      ...formData,
      [field]: value || null,
    });

  return {
    formData,
    setField,
    setFormData,
  };
};

export default useForm;
