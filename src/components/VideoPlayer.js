import React from 'react';

const VideoPlayer = (props) => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={props.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
