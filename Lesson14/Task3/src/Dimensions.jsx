import React, { useEffect, useState } from "react";

const Dimensions = () => {
    const [demensions, setDimensions] = useState({
        width: null,
        height: null,
    });

useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight});
    const handleResize = e => {
        const { innerWidth, innerHeight } = e.target;
        setDimensions({ width: innerWidth, height: innerHeight});
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    }
}, []);

    const { width, height } = demensions;
return <div className="dimensions">{`${width}px - ${height}px`}</div>
}

export default Dimensions;