import React from 'react';
import styles from './RequestItem.css';
import { useUrl, useMethod, useHandleClick } from '../../hooks/APIClientProvider';

const RequestItem = () => {
  const { handleClick } = useHandleClick();
  const { url } = useUrl();
  const { method } = useMethod();

  return (
    <section className={styles.RequestItem} onClick={handleClick}>
      <h3>{method}</h3>
      <p>{url}</p>
    </section>
  );
};

export default RequestItem;
