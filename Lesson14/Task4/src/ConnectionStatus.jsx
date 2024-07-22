import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const updateOflineStatus = () => {
      setStatus('offline');
    };

    const updateOnlineStatus = () => {
      setStatus('online');
    };

    window.addEventListener('offline', updateOflineStatus);
    window.addEventListener('online', updateOnlineStatus);

    return () => {
      window.removeEventListener('offline', updateOflineStatus);
      window.removeEventListener('online', updateOnlineStatus);
    };
  }, []);

  let classStyle = 'status';
  if (status === 'offline') {
    return <div className="status status_offline">{status}</div>;
  }

  return <div className={classStyle}>{status}</div>;
};

export default ConnectionStatus;
