import React from 'react';
import logo from './logo.svg';
import './App.css';
import eventimg from './images/eventimage.png'
import Background from './images/background.jpg';


function App() {
  return (
    <div className="App">

      <header className="App-header">
	  <img src={eventimg} className="eventimg" alt="eventimg" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
