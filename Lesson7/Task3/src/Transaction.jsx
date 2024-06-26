import React from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM');
const formatTime = time => moment(time).format('HH MM');
const numberFormat = new Intl.NumberFormat('en-GB');

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate(time)}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">
        {from} &#10230; {to}
      </span>
      <span className="transaction__rate">{numberFormat.format(rate)}</span>
      <span className="transaction__amount">{numberFormat.format(amount)}</span>
    </li>
  );
};

export default Transaction;
