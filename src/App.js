import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';

import data from './data/walkthroughs.json';
let videoData = data[0];

function App() {
  return (
    <div className="App">
      <div id="left" class="screen">
        <h1>ThankView walkthrough</h1>
      </div>
      <div id="right" class="screen">
        <VideoPlayer url={videoData.url} />
      </div>
    </div>
  );
}

export default App;
