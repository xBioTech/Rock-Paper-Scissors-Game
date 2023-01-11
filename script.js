const getRandomName = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
    return getRandomName [Math.floor(Math.random()* getRandomName.length)];
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose"
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        return "You Won"
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Won"
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        return "You Lose"
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        return "You Lose"
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        return "You Won"
    } else return "Click F5 to refresh the Page and enter a valid game move"
  }


const playerSelection = prompt("Choose your Weapon");
const computerSelection = getComputerChoice();



console.log(playRound(playerSelection, computerSelection));
