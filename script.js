
function getComputerChoice() {
    let random = (Math.floor(Math.random() * (3 - 0) + 1));
    let compChoice;
    switch (random) {
        case 1:
            compChoice = "Rock";
            break;
        case 2:
            compChoice = "Paper";
            break;
        case 3:
            compChoice = "Scissors";
            break;
        default:
            break;
    }
    return compChoice;
}

// Add logic to display computer's choice and then what you did
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        playWinCount++;
        compWinCount++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") { 
        playWinCount++;
        compWinCount++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        playWinCount++;
        compWinCount++;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playWinCount++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playWinCount++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playWinCount++;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        compWinCount++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        compWinCount++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        compWinCount++;
    }
}



function game(playerSelection) {

    for (let i = 0; i < 5; i++) {
        const rock = document.querySelector('#rock');
        const paper = document.querySelector('#paper');
        const scissors = document.querySelector('#scissors');
        const computerSelection = getComputerChoice();

        rock.addEventListener('click', playRound('rock', computerSelection));
        paper.addEventListener('click', playRound('paper', computerSelection));
        scissors.addEventListener('click', playRound('scissors', computerSelection));
        // add event listen for buttons for users selection
        //UPDATE SCORE WITH RESULT
    }
    if (playWinCount === compWinCount) {
        console.log("It's a tie.");
    } else if (playWinCount > compWinCount) {
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
}

let playWinCount = 0;
let compWinCount = 0;
game();

