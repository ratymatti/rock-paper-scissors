import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Options from './components/Options/Options';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Rock-paper-scissors</h1>
        </header>
        <Options />
      </div>
    );
  }
  }
  

export default App;
