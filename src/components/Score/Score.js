import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
    render() {
        return (
            <div className='score'>
                <h3>{`Your score: ${this.props.score}`}</h3>    
            </div>
        );
    }
}

export default Score;
