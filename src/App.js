import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';

import data from './data/walkthroughs.json';
import MenuItem from './components/MenuItem';
let videoData = data[0];

function App() {
  return (
    <div className="App">
      <div className="module">
        <div id="left" class="screen">
          <div id="header">
            <h1>ThankView Walkthrough</h1>
            <p>Total: </p>
          </div>
          <MenuItem
            title={videoData.title}
            minutes={videoData.minutes}
            seconds={videoData.seconds}
          />
        </div>
        <div id="right" class="screen">
          <VideoPlayer url={videoData.url} />
        </div>
      </div>
    </div>
  );
}

export default App;
