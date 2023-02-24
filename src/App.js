import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Options from './components/Options/Options';
import Choices from './components/Choices/Choices';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playersChoice: '',
      computersChoice: ''
    }

    this.getPlayersChoice = this.getPlayersChoice.bind(this);
  }

  getPlayersChoice(choice) {
    const computersChoice = this.generateComputerChoice();

    this.setState({ playersChoice: choice });

    setTimeout(() => {
      this.setState({ computersChoice: computersChoice });  
    }, 2000)
  }

  generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Rock-paper-scissors</h1>
        </header>
        {this.state.playersChoice &&
          <Choices playersChoice={this.state.playersChoice}
                   computersChoice={this.state.computersChoice} /> 
        }
        <Options  onPlayersChoice={this.getPlayersChoice} />
      </div>
    );
  }
}
  

export default App;
