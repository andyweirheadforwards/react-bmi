import { useState } from 'react';

import { RbcFormData } from '../pages/bmi-calculator/form-schema';

const useForm = (defaultData: RbcFormData) => {
  const [formData, setFormData] = useState<RbcFormData>(defaultData);

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
