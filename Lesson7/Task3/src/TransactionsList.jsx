import React, { Component } from 'react';
import Transaction from './Transaction.jsx';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map(user => (
        <Transaction key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default TransactionsList;
