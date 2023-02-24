import React, { Component } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors, FaSpinner } from 'react-icons/fa';
import './Choices.css';

class Choices extends Component {
    constructor(props) {
        super(props);

        this.renderChoice = this.renderChoice.bind(this);
    }

    renderChoice(choice) {
        switch(choice) {
            case 'rock':
                return <FaHandRock size='3rem'/>;
            case 'paper':
                return <FaHandPaper size='3rem'/>;
            case 'scissors':
                return <FaHandScissors size='3rem'/>;
            default:
                return null;
        }
    }

    render() {
        const renderChoice = this.renderChoice;

        return (
            <div className='choices'>
                <div className='player'>
                    <div className='icon'>
                        {this.props.playersChoice && renderChoice(this.props.playersChoice)}
                    </div>
                    <h3>Players Choice</h3>    
                </div>
                <div className='computer'>
                    <div className='spinningIcon'>
                        {this.props.computersChoice && !this.props.weHaveAWinner && <FaSpinner size='3rem'/>}
                    </div>
                    <div className='icon'>
                        {this.props.computersChoice && this.props.weHaveAWinner && this.renderChoice(this.props.computersChoice)}
                    </div>
                    <h3>Computers Choice</h3>
                </div>   
            </div>
        );
    }
}

export default Choices;
