import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';

import data from './data/walkthroughs.json';
import MenuItem from './components/MenuItem';

function App() {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  const countTotalTime = () => {
    let sec = 0;

    data.forEach((videoData) => {
      sec += videoData.minutes * 60 + videoData.seconds;
    });

    // Here this returns a value of 9m 13s vs 9m 30s in the example
    return `${Math.floor(sec / 60)}m ${sec % 60}s`;
  };

  const handleMenuClick = (idx) => {
    setSelectedIdx(idx);
  };

  return (
    <div className="App">
      <div className="module">
        <div id="left" className="screen">
          <div id="header">
            <h1>ThankView Walkthrough</h1>
            <p>Total: {countTotalTime()}</p>
          </div>
          {data.map((videoData, idx) => (
            <MenuItem
              key={idx}
              idx={idx}
              title={videoData.title}
              minutes={videoData.minutes}
              seconds={videoData.seconds}
              onClick={handleMenuClick}
              selected={idx === selectedIdx}
            />
          ))}
        </div>
        <div id="right" className="screen">
          {data.map((videoData, idx) => (
            <VideoPlayer
              key={idx}
              hide={idx !== selectedIdx}
              url={videoData.url}
              thumb={videoData.thumb}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
