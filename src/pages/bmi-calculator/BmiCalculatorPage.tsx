import { Box, Grid } from '@material-ui/core';
import React, { FC } from 'react';

import BmiCalculatorForm from './BmiCalculatorForm';

const BmiCalculatorPage: FC = () => (
  <Box mt={2}>
    <Grid container justify="center" spacing={4}>
      <Grid item md={6} sm={8} xs={12}>
        <BmiCalculatorForm />
      </Grid>
    </Grid>
  </Box>
);

export default BmiCalculatorPage;
