import React, { Component } from 'react';

class NewGame extends Component {
    render() {
        return (
            <div className='newGame'>
               <button  className='newGameButton'
                        onClick={this.props.clearGame}>New Game</button> 
            </div>
        );
    }
}

export default NewGame;
