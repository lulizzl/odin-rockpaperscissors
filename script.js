/* get player move -prompt for input, translate input to accepted answers, if it's not recognizable, start again

options */
const options = ["Rock", "Paper", "Scissors"] 

let playerInput = ''
let playerChoice = ''
let computerScore = ''
let gameStatus = ''
let gameData = ''
let computerPoints = '0'
let playerPoints = '0'
let rounds = 0

function getPlayerInput() {
    playerInput = prompt('Choose your move wisely ...')
}

function getPlayerChoice(x) {
    playerChoice = x[0].toUpperCase() + x.slice(1).toLowerCase()
}

function checkPlayerChoice() {
    if (options.includes(playerChoice)) {
        } else {
            playerChoice = 'Forfeit';
            console.log("That's not an acceptable answer - round forfeit.")
        }
}
    


/* Get Computer Move */

let computerChoice = ''

function getComputerChoice() {
    computerChoice = options[Math.floor(Math.random() * 3)]
}



/* Play a Round */

function getGameData() {
    gameData = [playerChoice, computerChoice]
}


function playRound() {
    switch (gameData.toString()) {
        case 'Rock,Rock':
            gameResult = "draw";
            roundWinner = 'draw';
            break;
        case 'Rock,Paper':
            gameResult = "Paper beats Rock. You lose";
            roundWinner = 'Computer';
            break;
        case 'Rock,Scissors':
            gameResult = "Rock beats Scissors. You win";
            roundWinner = 'Player';
            break;
        case 'Paper,Rock':
            gameResult = "Paper beats Rock. You win";
            roundWinner = 'Player';
            break;
        case 'Paper,Paper':
            gameResult = "draw";
            roundWinner = 'draw';
            break;
        case 'Paper,Scissors':
            gameResult = 'Scissors beats Paper. You lose';
            roundWinner = 'Computer';
            break;
        case 'Scissors,Rock':
            gameResult = 'Rock beats Scissors. You lose';
            roundWinner = 'Computer';
            break;
        case 'Scissors,Paper':
            gameResult = 'Scissors beats Paper. You win';
            roundWinner = 'Player';
            break;
        case 'Scissors,Scissors':
            gameResult ="draw";
            roundWinner = 'draw';
            break;
        default:
            gameResult = 'You forfeited the Round.'
            roundWinner = 'Computer'}}

function keepScore() {
        if (roundWinner == 'Player') {
            playerPoints = ++playerPoints;
        } else if (roundWinner == 'Computer') {
            computerPoints = ++computerPoints;
        } else { /* do nothing */}
        return [playerPoints, computerPoints]
    }



function playGame() {
        getComputerChoice()
        getPlayerInput()
        getPlayerChoice(playerInput)
        checkPlayerChoice(playerChoice)
        getGameData()
        playRound()
        keepScore()
        rounds = ++rounds
        return('Moves:' + gameData + ' Result:' + gameResult + ' Score:' + [playerPoints, computerPoints] + ' Rounds:' + rounds)
    }

function game() {
    addEventListener('click', () => {
        if (rounds < 5) {
        console.log(playGame())}
        else if (rounds >= 5, computerPoints < playerPoints){
            console.log('Game is Over - you won')}
            else if (rounds >= 5, computerPoints > playerPoints){
                console.log('Game is Over - you lost')}
                else if (rounds >= 5, computerPoints == playerPoints) {
                    console.log('Game is Over - in the end it was just a draw')
                }
            }
    )}

game()

