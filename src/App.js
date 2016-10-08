import React, { Component } from 'react';

import JobsList from './JobsList/JobsList'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>HTML Jobs for Modern Nights MUSH</h2>
        </div>
        <p className="App-intro">
          <JobsList>
          </JobsList>
        </p>
      </div>
    );
  }
}

export default App;
