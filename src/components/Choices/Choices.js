import React, { Component } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

class Choices extends Component {
    constructor(props) {
        super(props);

        this.renderChoice = this.renderChoice.bind(this);
    }

    renderChoice(choice) {
        switch(choice) {
            case 'rock':
                return <FaHandRock size='2rem'/>;
            case 'paper':
                return <FaHandPaper size='2rem'/>;
            case 'scissors':
                return <FaHandScissors size='2rem'/>;
            default:
                return null;
        }
    }

    render() {
        const renderChoice = this.renderChoice;

        return (
            <div>
                <div className='player'>
                    {this.props.playersChoice && renderChoice(this.props.playersChoice)}    
                </div>
                <div className='computer'>
                    {this.props.computersChoice && this.renderChoice(this.props.computersChoice)}
                </div>   
            </div>
        );
    }
}

export default Choices;
