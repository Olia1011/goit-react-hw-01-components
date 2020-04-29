import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => (
  <li className={styles.item}>
    <span className={isOnline 
      ? styles.online 
      : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
