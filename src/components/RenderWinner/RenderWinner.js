import React, { Component } from 'react';
import './RenderWinner.css';

class RenderWinner extends Component {

    render() {
        return (
            <div  className='winner'>
                <h3>{this.props.winner && 
                    `${this.props.winner === 'player' ? 'You won!'
                     : this.props.winner === 'computer' ? 'Computer won!'
                     : `It's a tie!` }`}
                </h3>
            </div>
        );
    }
}

export default RenderWinner;
