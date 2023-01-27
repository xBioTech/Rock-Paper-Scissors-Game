const getRandomName = ["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice(){
    return getRandomName [Math.floor(Math.random()* getRandomName.length)];
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie"
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore = computerScore +1;
        return "You Lose"
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        playerScore = playerScore +1;
        return "You Won"
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore = playerScore +1;
        return "You Won"
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        computerScore = computerScore +1;
        return "You Lose"
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        computerScore = computerScore +1;
        return "You Lose"
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        playerScore = playerScore +1;
        return "You Won"
    } else return "Click F5 to refresh the Page and enter a valid game move"
  }


let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
const playerSelectionScissor = document.querySelector(".btnscissor");


const playerSelectionRock = document.querySelector(".btnrock");
    playerSelectionRock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("ROCK", computerSelection);
    console.log(result);
});

const playerSelectionPaper = document.querySelector(".btnpaper");



/*
This function Loops the playRound, displays the Round Scores
and compares the Game score at the end of the loop to declare
 the Winner of the Game
*/
/*
function game(){
    for (let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose your Weapon!").toUpperCase();
    console.log("You chose " + playerSelection);

    console.log("Computer chose " + computerSelection);
    
    console.log(playRound(playerSelection, computerSelection));

    console.log("Your current Score: " + playerScore);
    console.log("Computers current Score: " + computerScore);
    }
    
if (playerScore > computerScore){
    return "You Won the Game! Congrats you're smarter than Javascript."
} else if (playerScore < computerScore){
    return "You Lose the Game! Refresh the Page with F5 to try one more time!"
} else return "You Tied the Game!"
}
console.log(game());
*/




