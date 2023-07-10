
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
    score.textContent = `${playWinCount} : ${compWinCount}`



    const overlay = document.getElementById('overlay');
    const endText = document.querySelector('.end-text');

    if (playWinCount === 5 && compWinCount === 5) {
        const modal = document.querySelector('#modal');
        endText.textContent="It's a tie!!";
        openModal(modal);

    } else if (playWinCount === 5) {
        const modal = document.querySelector('#modal');
        openModal(modal);
        endText.textContent="Congratulations! You Won!";
        // player wins
        
    } else if (compWinCount === 5) {
        const modal = document.querySelector('#modal');
        openModal(modal);
        endText.textContent="Unlucky! You lose!";
        // computer wins
    }

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active');
        overlay.classList.add('active');
        endText.classList.add('active');
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active');
        overlay.classList.remove('active');
        endText.classList.add('active');
    }
    const closeModalButton = document.querySelector('.close-button');

    closeModalButton.addEventListener('click', () => {
        closeModal(modal);
        location.reload();
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        closeModal(modal);
        location.reload();
    })

}


let scores = document.querySelector('.score-sheet');
let scoresString = scores.textContent.split(":");
let playWinCount = scoresString[0].trim();
let compWinCount = scoresString[1].trim();

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', e => { playRound('rock', getComputerChoice()) });
paper.addEventListener('click', e => { playRound('paper', getComputerChoice()) });
scissors.addEventListener('click', e => { playRound('scissors', getComputerChoice()) });


