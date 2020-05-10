import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestItem.css';

const RequestItem = ({ method, url, onClick }) => {

  return (
    <section className={styles.RequestItem} onClick={onClick}>
      <h3>{method}</h3>
      <p>{url}</p>
    </section>
  );
};

RequestItem.propTypes = {
  method: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func
};

export default RequestItem;
