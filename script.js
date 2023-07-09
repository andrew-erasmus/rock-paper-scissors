
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
        updateImages(playerSelection, computerSelection);
        //getImage and update score
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        playWinCount++;
        compWinCount++;
        updateImages(playerSelection, computerSelection);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        playWinCount++;
        compWinCount++;
        updateImages(playerSelection, computerSelection);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playWinCount++;
        updateImages(playerSelection, computerSelection);
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playWinCount++;
        updateImages(playerSelection, computerSelection);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playWinCount++;
        updateImages(playerSelection, computerSelection);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        compWinCount++;
        updateImages(playerSelection, computerSelection);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        compWinCount++;
        updateImages(playerSelection, computerSelection);
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        compWinCount++;
        updateImages(playerSelection, computerSelection);
    }
}

function updateImages(playerSelection, computerSelection) {
    const player = document.querySelector('#playerImg');
    player.src = getImage(playerSelection.toLowerCase());
    const computer = document.querySelector('#compImg');
    computer.src = getImage(computerSelection.toLowerCase());
}

function getImage(option) {
    //returns the src for the imgs
    if (option === 'rock') {
        return './images/rock.png';
    } else if (option === 'paper') {
        return "./images/paper.png";
    } else if (option === 'scissors') {
        return "./images/scissors.png";
    }
}

function updateResult() {
    //counts the score
}

function game(playerSelection, computerSelection) {



    playRound(playerSelection,computerSelection);

    // add event listen for buttons for users selection

    //UPDATE SCORE WITH RESULT

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
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerSelection = getComputerChoice();

rock.addEventListener('click', game('rock', computerSelection));
paper.addEventListener('click', game('paper', computerSelection));
scissors.addEventListener('click', game('scissors', computerSelection));

// FOR SOME REASON CLICKS WITHOUT CLICKING -- CHECK EVENT LISTENERS


