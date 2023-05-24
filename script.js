
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
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats Scissors.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You win! Scissors beats Paper.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You lose! Scissors beats Paper.";
    }
}



function game(playerSelection) {
    let playWinCount=0;
    let compWinCount=0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerChoice();
        let result=playRound(playerSelection, computerSelection);
        console.log(result);    
        if(result.includes("It's a tie")){
            playWinCount++;
            compWinCount++;
        }else if(result.includes("You win")){
            playWinCount++;
        }else if(result.includes("You lose")){
            compWinCount++;
        }
        console.log("Player: "+playWinCount+"\nComputer: "+compWinCount);            
    }
    if(playWinCount === compWinCount){
        console.log("It's a tie.");
    }else if(playWinCount > compWinCount){
        console.log("Player Wins!");
    }else{
        console.log("Computer Wins!");
    }
}

game();