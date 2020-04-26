import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { FC } from 'react';

import styles from './Loading.module.scss';

const Loading: FC = () => (
  <section className={styles.loading} data-test-id="loading">
    <CircularProgress />
    <Typography variant="h6">Loading&hellip;</Typography>
  </section>
);

export default Loading;
