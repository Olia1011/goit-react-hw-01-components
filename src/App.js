import React from 'react';
import Profile from './components/Profile/Profile';
import user from './templates/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './templates/statistical-data';
import FriendList from './components/FriendList/FriendList';
import friends from './templates/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './templates/transactions.json';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;