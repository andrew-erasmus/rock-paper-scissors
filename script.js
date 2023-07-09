
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
        updateResult();

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        playWinCount++;
        compWinCount++;
        updateImages(playerSelection, computerSelection);
        updateResult();

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        playWinCount++;
        compWinCount++;
        updateImages(playerSelection, computerSelection);
        updateResult();

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playWinCount++;
        updateImages(playerSelection, computerSelection);
        updateResult();

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playWinCount++;
        updateImages(playerSelection, computerSelection);
        updateResult();

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playWinCount++;
        updateImages(playerSelection, computerSelection);
        updateResult();

    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        compWinCount++;
        updateImages(playerSelection, computerSelection);
        updateResult();

    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        compWinCount++;
        updateImages(playerSelection, computerSelection);
        updateResult();

    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        compWinCount++;
        updateImages(playerSelection, computerSelection);
        updateResult();
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
    const score = document.querySelector('.score-sheet');
    console.log(score)
    score.textContent = `${playWinCount} : ${compWinCount}`
}


let playWinCount = 0;
let compWinCount = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', e => {playRound('rock', getComputerChoice()) });
paper.addEventListener('click', e => {playRound('paper', getComputerChoice())});
scissors.addEventListener('click', e => {playRound('scissors', getComputerChoice())});



