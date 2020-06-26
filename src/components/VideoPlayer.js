import React from 'react';
import data from '../data/walkthroughs.json';

let videoData = data[0];

const VideoPlayer = () => {
  console.log(videoData);
  // return <video></video>;
  return <div>hi</div>;
};

export default VideoPlayer;
