import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const colorCreator = () => {
  const component = () => Math.floor(Math.random() * 255);
  return `rgb(${component()}, ${component()}, ${component()})`;
};

export const StatItem = ({ stat: { label, percentage } }) => (
  <li className={styles.item} style={{ backgroundColor: colorCreator() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{`${percentage}%`}</span>
  </li>
);

StatItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
