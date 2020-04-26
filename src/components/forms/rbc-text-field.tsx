import { OutlinedTextFieldProps, TextField } from '@material-ui/core';
import React from 'react';

const RbcTextField = (props: OutlinedTextFieldProps) => (
  <TextField variant="outlined" margin="normal" fullWidth {...props} />
);

export default RbcTextField;
