import React, { Component } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

class Options extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerChoice: ''
        }

        this.setPlayerChoice = this.setPlayerChoice.bind(this);
    }

    setPlayerChoice(choice) {
        this.setState({ playerChoice: choice });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setPlayerChoice('rock')}>
                    <FaHandRock size='2rem'/>
                </button>  
                <button onClick={() => this.setPlayerChoice('paper')}>
                    <FaHandPaper size='2rem'/>
                </button> 
                <button onClick={() => this.setPlayerChoice('scissors')}>
                    <FaHandScissors size='2rem'/>
                </button> 
            </div>
        );
    }
}

export default Options;

