const getRandomName = ["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice(){
    return getRandomName [Math.floor(Math.random()* getRandomName.length)];
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie"
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore = computerScore +1;
        cScore.textContent = `${computerScore}`;
        return "You Lose"
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        playerScore = playerScore +1;
        pScore.textContent = `${playerScore}`;
        return "You Won"
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore = playerScore +1;
        pScore.textContent = `${playerScore}`;
        return "You Won"
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
        computerScore = computerScore +1;
        cScore.textContent = `${computerScore}`;
        return "You Lose"
    } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
        computerScore = computerScore +1;
        cScore.textContent = `${computerScore}`;
        return "You Lose"
    } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        playerScore = playerScore +1;
        pScore.textContent = `${playerScore}`;
        return "You Won"
    } else return "Click F5 to refresh the Page and enter a valid game move"
  }



let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();

const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");

function maxScore(){
    if (playerScore === 5){
        removeEventListener();
        return "You Won the Game! You are smarter than JS"
    } else if (computerScore === 5){
        removeEventListener();
        return "You Lose the Game! Press F5 to Refresh and try again"
    }
    }



    const playerSelectionRock = document.querySelector(".btnrock");
    playerSelectionRock.addEventListener("click", eventHandlerRock);

    function eventHandlerRock(){
        const computerSelection = getComputerChoice();
        const result = playRound("ROCK", computerSelection);
        console.log(result);
        console.log(maxScore());
    }


    const playerSelectionPaper = document.querySelector(".btnpaper");
    playerSelectionPaper.addEventListener("click", eventHandlerPaper);

    function eventHandlerPaper(){
        const computerSelection = getComputerChoice();
        const result = playRound("PAPER", computerSelection);
        console.log(result);
        console.log(maxScore());
    }

    const playerSelectionScissor = document.querySelector(".btnscissor");
    playerSelectionScissor.addEventListener("click", eventHandlerScissor);

    function eventHandlerScissor(){
        const computerSelection = getComputerChoice();
        const result = playRound("SCISSOR", computerSelection);
        console.log(result);
        console.log(maxScore());
    }


    function removeEventListener(){
        playerSelectionRock.removeEventListener("click", eventHandlerRock);
        playerSelectionPaper.removeEventListener("click", eventHandlerPaper);
        playerSelectionScissor.removeEventListener("click", eventHandlerScissor);
      }
   







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
    

console.log(game());
*/




