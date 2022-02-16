// Computer makes a choice on which shape to play
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

// Plays one round against computer returning result of game
function playRound(computerSelection) {
    let userChoice = prompt('Enter rock, paper, or scissors to play.', '');
    let result = '';
    userChoice = userChoice.toLowerCase();
    console.log(`${userChoice}` + ' vs. ' + `${computerSelection}` );
    switch (true){
        case (userChoice === computerSelection):
            result = `It's a tie!`;
            return console.log(result);
        case ((userChoice === 'rock' ) && (computerSelection === 'paper')):
            result = `You lose! Paper covers rock!`;
            return console.log(result);
        case ((userChoice === 'rock' ) && (computerSelection === 'scissors')):
            result = `You win! Rock smashes scissors!`;
            return console.log(result);
        case ((userChoice === 'paper' ) && (computerSelection === 'rock')):
            result = `You win! Paper covers Rock!`;
            return console.log(result);
        case ((userChoice === 'paper' ) && (computerSelection === 'scissors')):
            result = `You lose! Scissors cuts paper!`;
            return console.log(result);
        case ((userChoice === 'scissors' ) && (computerSelection === 'rock')):
            result = `You lose! Rock smashes scissors!`;
            return console.log(result);
        case ((userChoice === 'scissors') && (computerSelection === 'paper')):
            result = `You win! Scissors cuts paper!`;
            return console.log(result);
        default:
            result = `That's an invalid choice!`
            return console.log(result);
    }
}

// Plays a loop of five rounds using the playRound function
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(computerPlay());
    }
}

game();