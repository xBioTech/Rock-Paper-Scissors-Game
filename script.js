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
const scoreboardOutput = document.querySelector(".score-result");

function maxScore(){
    if (playerScore === 5){
        removeEventListener();
        return "You Won the Game! You are smarter than JS";
    } else if (computerScore === 5){
        removeEventListener();
        return "You Lose the Game! Press F5 to Refresh and try again";
    } 
    }



    const playerSelectionRock = document.querySelector(".btnrock");
    playerSelectionRock.addEventListener("click", eventHandlerRock);

    function eventHandlerRock(){
        const computerSelection = getComputerChoice();
        const result = playRound("ROCK", computerSelection);

        if (playerScore === 5 || computerScore === 5){
            removeEventListener();
            scoreboardOutput.textContent = maxScore();
        } else {
            scoreboardOutput.textContent = result;
        }
        
    }


    const playerSelectionPaper = document.querySelector(".btnpaper");
    playerSelectionPaper.addEventListener("click", eventHandlerPaper);

    function eventHandlerPaper(){
        const computerSelection = getComputerChoice();
        const result = playRound("PAPER", computerSelection);

        if (playerScore === 5 || computerScore === 5){
            removeEventListener();
            scoreboardOutput.textContent = maxScore();
        } else {
            scoreboardOutput.textContent = result;
        }
        
    }

    const playerSelectionScissor = document.querySelector(".btnscissor");
    playerSelectionScissor.addEventListener("click", eventHandlerScissor);

    function eventHandlerScissor(){
        const computerSelection = getComputerChoice();
        const result = playRound("SCISSOR", computerSelection);

        if (playerScore === 5 || computerScore === 5){
            removeEventListener();
            scoreboardOutput.textContent = maxScore();
        } else {
            scoreboardOutput.textContent = result;
        }
        
    }


    function removeEventListener(){
        playerSelectionRock.removeEventListener("click", eventHandlerRock);
        playerSelectionPaper.removeEventListener("click", eventHandlerPaper);
        playerSelectionScissor.removeEventListener("click", eventHandlerScissor);
      }