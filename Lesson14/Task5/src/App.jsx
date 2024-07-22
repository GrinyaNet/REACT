import React, { Component, useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={toggle}>Toggle</button>
      {visible && <Clock offset={-5} location={'New York'} />}
      {visible && <Clock offset={2} location={'KYIV'} />}
      {visible && <Clock offset={0} location={'LONDON'} />}
    </>
  );
};

export default App;
