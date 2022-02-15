
// function computerPlay () {
//     let randomNum = Math.floor((Math.random()*3) + 1);
//     console.log(randomNum);
//     if (randomNum === 1) {
//         let choice = 'rock';
//         console.log(choice);
//         return choice;
//     } else if (randomNum === 2) {
//         let choice = 'paper';
//         console.log(choice);
//         return choice;
//     } else {
//         let choice = 'scissors';
//         console.log(choice);
//         return choice;
//     }
// }

// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     if (playerSelection === computerSelection){
//         let result = `It's a tie!`;
//         return console.log(result);
//     } else if ((playerSelection === 'rock' ) && (computerSelection === 'paper')) {
//         let result = `You lose! Paper covers rock!`;
//         return console.log(result);
//     } else if ((playerSelection === 'rock' ) && (computerSelection === 'scissors')) {
//         let result = `You win! Rock smashes scissors!`;
//         return console.log(result);
//     } else if ((playerSelection === 'paper' ) && (computerSelection === 'rock')) {
//         let result = `You win! Paper covers Rock!`;
//         return console.log(result);
//     } else if ((playerSelection === 'paper' ) && (computerSelection === 'scissors')) {
//         let result = `You lose! Scissors cuts paper!`;
//         return console.log(result);
//     } else if ((playerSelection === 'scissors' ) && (computerSelection === 'rock')) {
//         let result = `You lose! Rock smashes scissors!`;
//         return console.log(result);
//     } else ((playerSelection === 'scissors') && (computerSelection == 'paper')); {
//         let result = `You win! Scissors cuts paper!`;
//         return console.log(result);
//     }
// }

// playRound('ROCK', computerPlay());