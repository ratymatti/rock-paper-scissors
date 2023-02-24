import React, { Component } from 'react';
import './NewGame.css';

class NewGame extends Component {
    render() {
        return (
            <div className='newGame'>
               <button onClick={this.props.clearGame}>New Game</button> 
            </div>
        );
    }
}

export default NewGame;
