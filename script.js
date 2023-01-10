const getRandomName = ["Rock", "Paper", "Scissor"];

function getComputerChoice(getRandomName){
    return getRandomName [Math.floor(Math.random()* getRandomName.length)];
}
console.log(getComputerChoice(getRandomName));