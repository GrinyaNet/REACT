import React from "react";
import Clock from './Clock.jsx';

const App = () => {
    return (
        <>
        <Clock  offset={-5} location={'New York'}/>        
        <Clock  offset={2} location={'KYIV'}/>
        <Clock  offset={0} location={'LONDON'}/>
        </>
    );
};

export default App;