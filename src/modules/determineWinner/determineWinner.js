/**
 * Function determineWinner which is used to check who won the game, player or computer.
 * 
 * @param {*} playersChoice 
 * @param {*} computersChoice 
 * @returns result of the game
 */

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
