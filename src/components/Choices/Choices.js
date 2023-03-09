import React, { Component } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors, FaSpinner } from 'react-icons/fa';
import './Choices.css';
import memoizeOne from 'memoize-one';

const iconMap = {
  rock: FaHandRock,
  paper: FaHandPaper,
  scissors: FaHandScissors,
};

class Choices extends Component {
  constructor(props) {
    super(props);
    this.renderChoice = this.renderChoice.bind(this);
    this.memoizedRenderChoice = memoizeOne(this.renderChoice);
  }

  renderChoice(choice) {
    const Icon = iconMap[choice];
    return Icon ? <Icon style={{ fontSize: '3rem' }} /> : null;
  }

  render() {
    const { playersChoice, computersChoice, weHaveAWinner } = this.props;

    return (
      <div className='choices'>
        <div className='player'>
          <div className='icon'>
            {playersChoice && this.memoizedRenderChoice(playersChoice)}
          </div>
          <h3>Players Choice</h3>
        </div>
        <div className='computer'>
          <div className='spinningIcon'>
            {computersChoice && !weHaveAWinner && <FaSpinner size='3rem' />}
          </div>
          <div className='icon'>
            {computersChoice && weHaveAWinner && this.memoizedRenderChoice(computersChoice)}
          </div>
          <h3>Computers Choice</h3>
        </div>
      </div>
    );
  }
}

export default Choices;
