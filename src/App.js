
import './App.css';
import React, { Component } from 'react';
import Options from './components/Options/Options';
import Choices from './components/Choices/Choices';
import determineWinner from './modules/determineWinner/determineWinner';
import RenderWinner from './components/RenderWinner/RenderWinner';
import Score from './components/Score/Score';
import NewGame from './components/NewGame/NewGame';

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
    this.clearGame = this.clearGame.bind(this);
  }

  getPlayersChoice(choice) {
    const computersChoice = this.generateComputerChoice();

    this.setState({ ...this.state, playersChoice: choice, computersChoice: computersChoice });

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
      this.setState({ ...this.state, winner: winner, score: (this.state.score + 1) })
    } else {
      this.setState({ ...this.state, winner: winner });
    }
    
  }

  clearGame() {
    this.setState({ ...this.state, playersChoice: '', computersChoice: '', winner: '' })
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
        {!this.state.playersChoice &&
          <Options  onPlayersChoice={this.getPlayersChoice} />        
        }
        {this.state.winner &&
          <NewGame clearGame={this.clearGame} />
        }
      </div>
    );
  }
}
  

export default App;
