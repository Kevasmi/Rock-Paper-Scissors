let playerScore = 0;
let computerScore = 0;
const score1 = document.querySelector('#player-score')
score1.textContent = `Player Score: ${playerScore} `;
const score2 = document.querySelector('#computer-score');
score2.textContent = `Computer Score: ${computerScore} `;
const resultContainer = document.querySelector('#result-list');

const btnRock = document.querySelector('#rock');
const playRock = document.querySelector('#rock').textContent;
const btnPaper = document.querySelector('#paper');
const playPaper = document.querySelector('#paper').textContent;
const btnScissors = document.querySelector('#scissors');
const playScissors = document.querySelector('#scissors').textContent;

const container = document.querySelector('#container');

// Computer makes a choice on which shape to play
function computerPlay() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    if (randomNum === 1) {
        let choice = 'rock';
        return choice;
    } else if (randomNum === 2) {
        let choice = 'paper';
        return choice;
    } else {
        let choice = 'scissors';
        return choice;
    }
}

// Plays one round against computer returning result of game
function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    let li = document.createElement('li');
    console.log(`${playerSelection}` + ' vs. ' + `${computerSelection}`);
    if ((playerScore < 5) && (computerScore < 5)) {
        switch (true) {
            case (playerSelection === computerSelection):
                li.innerText += ' It\'s a tie! ';
                return resultContainer.appendChild(li);
            case ((playerSelection === 'rock') && (computerSelection === 'paper')):
                computerScore++;
                score2.textContent = `Computer Score: ${computerScore} `;
                li.innerText += ` You lose! Paper covers rock! `;
                return resultContainer.appendChild(li);
            case ((playerSelection === 'rock') && (computerSelection === 'scissors')):
                playerScore++;
                score1.textContent = `Player Score: ${playerScore} `;
                li.innerText += ` You win! Rock smashes scissors! `;
                return resultContainer.appendChild(li);
            case ((playerSelection === 'paper') && (computerSelection === 'rock')):
                playerScore++;
                score1.textContent = `Player Score: ${playerScore} `;
                li.innerText += ` You win! Paper covers Rock! `;
                return resultContainer.appendChild(li);
            case ((playerSelection === 'paper') && (computerSelection === 'scissors')):
                computerScore++;
                score2.textContent = `Computer Score: ${computerScore} `;
                li.innerText += ` You lose! Scissors cuts paper! `;
                return resultContainer.appendChild(li);
            case ((playerSelection === 'scissors') && (computerSelection === 'rock')):
                computerScore++;
                score2.textContent = `Computer Score: ${computerScore} `;
                li.innerText += ` You lose! Rock smashes scissors! `;
                return resultContainer.appendChild(li);
            case ((playerSelection === 'scissors') && (computerSelection === 'paper')):
                playerScore++;
                score1.textContent = `Player Score: ${playerScore} `;
                li.innerText += ` You win! Scissors cuts paper! `;
                return resultContainer.appendChild(li);
            default:
                li.innerText += ` That's an invalid choice! `;
                return resultContainer.appendChild(li);
        }
    } else if (playerScore === 5) {
        li.innerText += `You win! Good job!`;
        return resultContainer.appendChild(li);
    } else {
        li.innerText += `Computer wins! Better luck next time!`;
        return resultContainer.appendChild(li);
    }
}



btnRock.addEventListener('click', () => playRound(playRock));
btnPaper.addEventListener('click', () => playRound(playPaper));
btnScissors.addEventListener('click', () => playRound(playScissors));

// Plays a loop of five rounds using the playRound function
// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(computerPlay());
//     }
// }

// game();