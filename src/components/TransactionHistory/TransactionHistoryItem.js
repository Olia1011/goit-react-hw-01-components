import React from "react";
import PropTypes from "prop-types";
import styles from "./Transaction.module.css";

 const TransactionHistoryItem = ({
  item: { type, amount, currency }, idx
}) => (
  <tr className={idx % 2 === 0 
  ? styles.trEven 
  : styles.trOdd}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
  })
};

export default TransactionHistoryItem;