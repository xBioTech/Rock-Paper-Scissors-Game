const getRandomName = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
    return getRandomName [Math.floor(Math.random()* getRandomName.length)];
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore = computerScore +1;
        return "You Lose"
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        playerScore = playerScore +1;
        return "You Won"
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore = playerScore +1;
        return "You Won"
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        computerScore = computerScore +1;
        return "You Lose"
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        computerScore = computerScore +1;
        return "You Lose"
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        playerScore = playerScore +1;
        return "You Won"
    } else return "Click F5 to refresh the Page and enter a valid game move"
  }


let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt("Choose your Weapon!")
const computerSelection = getComputerChoice();



function game(){
    for (let i = 0; i < 5; i++){

        playerSelection = prompt("Choose your Weapon!")
    console.log("You chose " + playerSelection);

    console.log("Computer chose " + computerSelection);
    
    console.log(playRound(playerSelection, computerSelection));

    console.log(playerScore);
    console.log(computerScore);
    }
if (playerScore > computerScore){
    return "You Won the Game! Congrats you're smarter than Javascript."
} else if (playerScore < computerScore){
    return "You Lose the Game! Refresh the Page with F5 to try one more time!"
} else return "You Tied the Game!"
}



console.log(game());

