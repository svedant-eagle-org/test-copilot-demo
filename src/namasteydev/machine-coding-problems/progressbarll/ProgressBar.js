import React, { useEffect, useState } from "react";
import "./styles.css";
const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 1000);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(-${100 - animatedProgress}%)`,
          color: animatedProgress <= 5 ? "black" : "white",
        }}
      >
        {animatedProgress}%
      </div>
    </div>
  );
};

const MultipleProgressBars = () => {
  const bars = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <div>
      <h1>ProgressBar</h1>

      {bars.map((value) => {
        return <ProgressBar key={value} progress={value} />;
      })}
    </div>
  );
};

export default MultipleProgressBars;
