import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import React, { FormEventHandler, PropsWithChildren } from 'react';

import RbcSubmitButton from './rbc-submit-button';

export type RbcFormCardProps = {
  title: string;
  submitLabel: string;
  canSubmit: boolean;
  onSubmit: FormEventHandler;
};
const RbcFormCard = ({ title, submitLabel, onSubmit, canSubmit, children }: PropsWithChildren<RbcFormCardProps>) => (
  <>
    <Card>
      <CardHeader title={title} />
      <form onSubmit={onSubmit}>
        <CardContent>{children}</CardContent>
        <CardActions>
          <RbcSubmitButton fullWidth disabled={!canSubmit}>
            {submitLabel}
          </RbcSubmitButton>
        </CardActions>
      </form>
    </Card>
  </>
);

export default RbcFormCard;
