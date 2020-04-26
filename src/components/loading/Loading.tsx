import CircularProgress from '@material-ui/core/CircularProgress';
import React, { FC } from 'react';

import styles from './Loading.module.scss';

const Loading: FC = () => (
  <section className={styles.loading} data-test-id="loading">
    <CircularProgress />
    Loading...
  </section>
);

export default Loading;
