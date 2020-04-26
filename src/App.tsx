import './scss/main.scss';

import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { FC } from 'react';

import BmiCalculatorPage from './pages/bmi-calculator/BmiCalculatorPage';
import theme from './theme';

const App: FC = () => {
  const { offset } = makeStyles(() => ({ offset: theme.mixins.toolbar }))();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">React BMI Calculator</Typography>
        </Toolbar>
      </AppBar>
      <div className={offset} />
      <Container maxWidth="md">
        <BmiCalculatorPage />
      </Container>
    </ThemeProvider>
  );
};

export default App;
