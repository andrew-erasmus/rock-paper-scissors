
function getComputerChoice(){
    let random = (Math.floor(Math.random()*(3-0)+1));
    let compChoice;
    switch (random){
        case 1:
            compChoice="Rock";
            break;
        case 2:
            compChoice="Paper";
            break;
        case 3:
            compChoice="Scissors";
            break;
        default:
            break;
    }
    return compChoice;
}




console.log(getComputerChoice())