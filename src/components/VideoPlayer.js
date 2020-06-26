import React from 'react';
import data from '../data/walkthroughs.json';

let videoData = data[0];

const VideoPlayer = () => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={videoData.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
