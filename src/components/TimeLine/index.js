import React from "react";

import "./index.scss";

const TimeLine = ({ start, end }) => {
  const totalWidth = 100 / 24;
  const barWidth = (end - start) * totalWidth;
  const startBarFrom = start * totalWidth;
  return (
    <div className="timebar-wrapper">
      <i className="fas fa-sun"></i>
      <div className="timebar">
        <span
          className="timebar__bar"
          style={{ width: `${barWidth}%`, left: `${startBarFrom}%` }}
        ></span>
        <div
          className="timebar__time"
          style={{ width: `${barWidth}%`, left: `${startBarFrom}%` }}
        >
          <span>{start > 12 ? `${start}PM` : `${start}AM`}</span>
          <span>{end > 12 ? `${end}PM` : `${end}AM`}</span>
        </div>
      </div>
      <i className="fas fa-moon"></i>
    </div>
  );
};

export default TimeLine;
