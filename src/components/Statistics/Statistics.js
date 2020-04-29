import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';
import { StatItem } from './StatItem';

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={styles.statistics}>
        <div className={styles.box}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <ul className={styles.stat_list}>
            {stats.map(stat => {
              return <StatItem key={stat.id} stat={stat} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
