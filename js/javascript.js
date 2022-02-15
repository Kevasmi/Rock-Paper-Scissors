
function computerPlay () {
    let randomNum = Math.floor((Math.random()*3) + 1);
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

function playRound(computerSelection) {
    let userChoice = prompt('Enter rock, paper, or scissors to play.', '');
    console.log(`${userChoice}` + ' vs. ' + `${computerSelection}` );
    userChoice = userChoice.toLowerCase();
    if (userChoice === computerSelection){
        let result = `It's a tie!`;
        return console.log(result);
    } else if ((userChoice === 'rock' ) && (computerSelection === 'paper')) {
        let result = `You lose! Paper covers rock!`;
        return console.log(result);
    } else if ((userChoice === 'rock' ) && (computerSelection === 'scissors')) {
        let result = `You win! Rock smashes scissors!`;
        return console.log(result);
    } else if ((userChoice === 'paper' ) && (computerSelection === 'rock')) {
        let result = `You win! Paper covers Rock!`;
        return console.log(result);
    } else if ((userChoice === 'paper' ) && (computerSelection === 'scissors')) {
        let result = `You lose! Scissors cuts paper!`;
        return console.log(result);
    } else if ((userChoice === 'scissors' ) && (computerSelection === 'rock')) {
        let result = `You lose! Rock smashes scissors!`;
        return console.log(result);
    } else ((userChoice === 'scissors') && (computerSelection == 'paper')); {
        let result = `You win! Scissors cuts paper!`;
        return console.log(result);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(computerPlay());
    }
}

game();