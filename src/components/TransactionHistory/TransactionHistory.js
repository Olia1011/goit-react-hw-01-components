import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';
import  TransactionHistoryItem  from "./TransactionHistoryItem";


export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map((item, idx) => {
          return <TransactionHistoryItem key={item.id} item={item} idx={idx} />;
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default TransactionHistory;
