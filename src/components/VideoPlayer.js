import React from 'react';

const VideoPlayer = (props) => {
  // Loads all video players in the beginning, but only shows the first one in the beginning
  let display = props.idx === 0 ? 'show' : 'hide';

  return (
    <div className={`video-container ${display}`}>
      {/* Not exact height & width, but didnt have enough time to figure out how to calculate so that it fills up the entire right half of the module. */}
      <video width="450" height="253" controls poster={props.thumb}>
        <source src={props.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
