import React from 'react';

const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <p>{props.title}</p>
      <p>
        {props.minutes}m {props.seconds}s
      </p>
    </div>
  );
};

export default MenuItem;
