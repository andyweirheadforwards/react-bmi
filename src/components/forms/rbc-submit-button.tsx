import { Button, ButtonProps } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';

const RbcSubmitButton = ({ children, ...props }: PropsWithChildren<ButtonProps>) => (
  <Button type="submit" color="primary" {...props}>
    {children}
  </Button>
);

export default RbcSubmitButton;
