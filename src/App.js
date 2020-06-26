import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';

import data from './data/walkthroughs.json';
import MenuItem from './components/MenuItem';
// let videoData = data[0];

function App() {
  console.log(data);

  return (
    <div className="App">
      <div className="module">
        <div id="left" className="screen">
          <div id="header">
            <h1>ThankView Walkthrough</h1>
            <p>Total: </p>
          </div>
          {data.map((videoData, i) => (
            <MenuItem
              key={i}
              title={videoData.title}
              minutes={videoData.minutes}
              seconds={videoData.seconds}
            />
          ))}
        </div>
        <div id="right" className="screen">
          <VideoPlayer url={data[0].url} />
        </div>
      </div>
    </div>
  );
}

export default App;
