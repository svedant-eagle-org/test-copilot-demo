import React, { useEffect, useState } from "react";
import "./styles.css";
const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    if (width < 0) setWidth(0);
    if (width > 100) setWidth(100);

    if (width < 40) setColor("red");
    else if (width >= 40 && width <= 79) setColor("orange");
    else if (width >= 80 && width <= 100) setColor("green");
  }, [width]);

  return (
    <div className="main-div">
      <div className="progress-div">
        <div
          className="color-div"
          id="testBgColor"
          style={{
            width: `${width > 100 ? 100 : width}%`,
            backgroundColor: color,
          }}
        ></div>
        <span className="text-span">{width}%</span>
      </div>
      <div className="button-div">
        <button onClick={(e) => setWidth(width + 10)}>+10%</button>
        <button onClick={(e) => setWidth(width - 10)}>-10%</button>
      </div>
    </div>
  );
};

export default ProgressBar;
