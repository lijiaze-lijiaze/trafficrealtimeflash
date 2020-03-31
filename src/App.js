import React from 'react';
import logo from './logo.svg';

import './App.css';
import Trafficflashfather from './trafficflashfather'
import { Select } from 'antd';

const { Option } = Select;
const station = []

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{opacity:'0.1'}} src={logo} className="App-logo" alt="logo" />
        
        <Trafficflashfather ></Trafficflashfather>
      </header>
    </div>
  );
}

export default App;
