import React from 'react';

const MenuItem = (props) => {
  const formatNumber = (num) => {
    if (num < 10) return `0${num}.`;
    else return `${num}.`;
  };

  return (
    <div className="menu-item">
      <p>
        {formatNumber(props.idx + 1)} {props.title}
      </p>
      <p>
        {props.minutes}m {props.seconds}s
      </p>
    </div>
  );
};

export default MenuItem;
