import React from 'react';

const VideoPlayer = (props) => {
  return (
    <div className="video-container">
      {/* Not exact height & width, but didnt have enough time to figure out how to calculate so that it fills up the entire right half of the module. */}
      <video
        width="450"
        height="253"
        controls
        poster={props.thumb}
        src={props.url}
      >
        {/* The code below prevented the video element from re-rendering once another element was selected */}
        {/* <source src={props.url} type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
