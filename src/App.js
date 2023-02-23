import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Options from './components/Options/Options';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playersChoice: ''
    }

    this.getPlayersChoice = this.getPlayersChoice.bind(this);
  }

  getPlayersChoice(choice) {
    this.setState({ playersChoice: choice });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Rock-paper-scissors</h1>
        </header>
        <p>this</p>
        <Options  onPlayersChoice={this.getPlayersChoice} />
      </div>
    );
  }
}
  

export default App;
