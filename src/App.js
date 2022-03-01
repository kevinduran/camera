import React, {useRef, useEffect, useState} from 'react'

import './App.css'

function App() {
  return (
    <div className="App">
      <div className="camera">
        <video ref={videoRef}></video>
        <button>SNAP!</button>
      </div>
    </div>
  );
}

export default App;
