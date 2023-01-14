const getRandomName = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
    return getRandomName [Math.floor(Math.random()* getRandomName.length)];
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose"
        computerScore++;
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        return "You Won"
        playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Won"
        playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        return "You Lose"
        computerScore++;
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        return "You Lose"
        computerScore++;
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        return "You Won"
        playerScore++;
    } else return "Click F5 to refresh the Page and enter a valid game move"
  }


let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt("Choose your Weapon!")
const computerSelection = getComputerChoice();



function game(){
    for (let i = 0; i < 4; i++){

        playerSelection = prompt("Choose your Weapon!")
    console.log("you chose " + playerSelection);

    console.log("Computer chose " + computerSelection);
    
    console.log(playRound(playerSelection, computerSelection));
    }
if (playerScore > computerScore){
    return "you won"
} else if (playerScore < computerScore){
    return "you lose"
} else return "you Tied the"
}



console.log(game());
console.log(playerScore);

