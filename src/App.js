import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Options from './components/Options/Options';
import Choices from './components/Choices/Choices';
import determineWinner from './modules/determineWinner/determineWinner';
import RenderWinner from './components/RenderWinner/RenderWinner';
import Score from './components/Score/Score';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playersChoice: '',
      computersChoice: '',
      winner: '',
      score: 0
    }

    this.getPlayersChoice = this.getPlayersChoice.bind(this);

  }

  getPlayersChoice(choice) {
    const computersChoice = this.generateComputerChoice();

    this.setState({ playersChoice: choice, computersChoice: computersChoice });

    setTimeout(() => {
      this.handleWinner();
    }, 1000)
  }

  generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  handleWinner() {
    const winner = determineWinner(this.state.playersChoice, this.state.computersChoice);
    if (winner === 'player') {
      this.setState({ winner: winner, score: (this.state.score + 1) })
    } else {
      this.setState({ winner: winner });
    }
    
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Rock-paper-scissors</h1>
        </header>
          <Score score={this.state.score} />
        {this.state.playersChoice &&
          <Choices playersChoice={this.state.playersChoice}
                   computersChoice={this.state.computersChoice}
                   weHaveAWinner={this.state.winner} /> 
        }
        <RenderWinner winner={this.state.winner} />
        <Options  onPlayersChoice={this.getPlayersChoice} />
      </div>
    );
  }
}
  

export default App;
