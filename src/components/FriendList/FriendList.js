import React from "react";
import PropTypes from "prop-types";
import  FriendListItem  from "./FriendListItem";
import styles from "./Friends.module.css";

 const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map(friend => {
          return <FriendListItem key={friend.id} friend={friend} />;
        })}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object)
};

export default FriendList;