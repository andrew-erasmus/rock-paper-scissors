
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


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock"){
        console.log("It's a tie!");
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper"){
        console.log("It's a tie!");
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        console.log("It's a tie!");
    }else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        console.log("You win! Rock beats Scissors.");
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        console.log("You win! Paper beats Scissors.");
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        console.log("You win! Scissors beats Paper.");
    }else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        console.log("You lose! Paper beats Rock.");
    }else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        console.log("You lose! Rock beats Scissors.");
    }else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        console.log("You lose! Scissors beats Paper.");
    }
}

let playerChoice="Scissors";
console.log(playerChoice);
console.log(playRound(playerChoice,getComputerChoice()))