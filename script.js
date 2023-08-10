const options = ["Rock", "Paper", "Scissors"] 

let computerPoints = '0'
let playerPoints = '0'

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}

function getGameData() {
    computerChoice = getComputerChoice()
    return [playerChoice, computerChoice]
}

function keepScore() {
    if (roundWinner == 'Player') {
        playerPoints = ++playerPoints;
    } else if (roundWinner == 'Computer') {
        computerPoints = ++computerPoints;
    }
    return 'Player Points: ' + playerPoints + ' Computer Points: ' + computerPoints + '\n'
}

roundDisplay = ''
function playRound() {
    gameData = getGameData()
    console.log(gameData)
    switch (gameData.toString()) {
        case 'Rock,Rock':
        case 'Paper,Paper':
        case 'Scissors,Scissors':
            div.textContent = "draw"
            return 'draw';
            break
        case 'Rock,Paper':
            div.textContent = "Paper beats Rock. You lose";
            return 'Computer';
            break
        case 'Rock,Scissors':
            div.textContent = "Rock beats Scissors. You win";
            return 'Player';
            break
        case 'Paper,Rock':
            div.textContent = "Paper beats Rock. You win";
            return 'Player';
            break
        case 'Paper,Scissors':
            div.textContent = 'Scissors beats Paper. You lose'
            return 'Computer';
            break
        case 'Scissors,Rock':
            div.textContent = 'Rock beats Scissors. You lose'
            return 'Computer';
            break
        case 'Scissors,Paper':
            div.textContent = 'Scissors beats Paper. You win';
            return 'Player';
            break
    }
}

function pressButton(e) {
    playerChoice = this.textContent
    playGame()
}

function playGame() {
    roundWinner = playRound()
    score = keepScore()
    gameScore.textContent = score
    if (playerPoints >= 5) {
        gameScore.textContent = score + "You won! Game is over"
        playerPoints = 0
        computerPoitns = 0
    } else if (computerPoints >= 5) {
        gameScore.textContent = score + "You lost Game is over"
        playerPoints = 0
        computerPoints = 0
    }
    }

const buttons = document.querySelectorAll('.button')
buttons.forEach(button => button.addEventListener('click', pressButton))

const div = document.createElement('div')
const body = document.querySelector('body')

const gameScore = document.createElement('div')


body.appendChild(div)
body.appendChild(gameScore)


