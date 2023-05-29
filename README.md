# Rock-Paper-Scissors-Game

## Live Demo

[Click me to see the Live Demo!](https://xbiotech.github.io/Rock-Paper-Scissors-Game/)

[![Rock Paper Scissors Game](https://i.gyazo.com/fdc30c8b04abd2ed4a68cd8c756371ba.gif?autoplay=1&loop=1)](https://gyazo.com/fdc30c8b04abd2ed4a68cd8c756371ba)

## Welcome! :wave:

Thanks for checking out my Project.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Learning resources](#learning-resources)
  - [Feedback](#got-feedback-for-me)

## Overview

### The project

A simple Rock Paper Scissors game where the computer picks a random string from an array and compares it with the users selection, until the maximum score is reached.

This project was created as part of the Odin Project curriculum, an open-source web development education platform. The purpose of this project was to learn and practice new web development skills.

## My process

### Built with

- HTML5
- CSS
- Flexbox
- JavaScript

### What I learned

- Picking a random String from an Array.
- Write, use and understand Functions including Parameters.
- Use if else conditionals and logical operators
- Understand and use Loops (when i started the project i used loops instead of a scoring system to play exactly 5 rounds, however it was changed into a scoring system so the player who reaches 5 points first wins the game no matter how many rounds it takes)
- Learned about Case-Sensitivity
- Learned about DOM Manipulation
- Using multiple Git Branches (Feature Branches) and merging them with the main branch after finishing the feature

I added some code snippets below to illustrate some functions

```javascript
// This function returns a random string from the "getRandomName" array
const getRandomName = ["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice() {
  return getRandomName[Math.floor(Math.random() * getRandomName.length)];
}

//This shows a small section of the playRound function thats used for comparing the user selection with the computers random selection, and then returns whether the user won , tied or lost the round and then increments the score accordingly
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computerScore = computerScore + 1;
    cScore.textContent = `${computerScore}`;
    return "You Lose";
  }
  //...
}

//inside the eventHandler functions the computerselection is associated with the function that picks the random string from the array
function eventHandlerRock() {
  const computerSelection = getComputerChoice();
  const result = playRound("ROCK", computerSelection);

  //...
}
```

### Learning resources

- [The Odin Project](https://www.theodinproject.com/)
- [W3Schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/)
- [javascript.info](https://javascript.info/)

## Got feedback for me?

I'm always down for some feedback! I'm constantly striving to improve my coding skills and take them to the next level, so if you have any thoughts or suggestions, don't hesitate to hit me up via email or Discord.

Thanks a ton for your help, and let's blast off together :rocket:

- E-Mail - [Dennis Schneider](mailto:biotech9261@gmail.com)
- Discord - [BioTech](https://discord.com/users/343126401450377217)
