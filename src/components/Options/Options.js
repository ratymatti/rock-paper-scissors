import React, { Component } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

class Options extends Component {
    render() {
        return (
            <div>
              <button><FaHandRock size='2rem'/>  </button>  
              <button><FaHandPaper size='2rem'/>  </button> 
              <button><FaHandScissors size='2rem'/>  </button> 
            </div>
        );
    }
}

export default Options;
