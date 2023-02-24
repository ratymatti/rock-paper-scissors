
function determineWinner(playersChoice, computersChoice) {
    if (playersChoice === computersChoice) {
        return `it's a tie!`
    } else if (playersChoice === 'rock' && computersChoice === 'scissors') {
        return 'player';
    } else if (playersChoice === 'paper' && computersChoice === 'rock') {
        return 'player';
    } else if (playersChoice === 'scissors' && computersChoice === 'paper') {
        return 'player';
    } else {
        return 'computer';
    }
}

export default determineWinner;
