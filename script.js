// html skeleton

// controls the rock/paper/scissors div
const gameOptions = document.createElement("div");
gameOptions.className = "main";
document.body.appendChild(gameOptions);

const scoreCount = document.createElement("ol");
scoreCount.className = "score";
document.body.appendChild(scoreCount);

// variables
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

// Ordered list logic
const playerItem = document.createElement("li");
const player = document.createTextNode("Player Score");
playerItem.appendChild(player);

const computerItem = document.createElement("li");
const computer = document.createTextNode("Computer Score");
computerItem.appendChild(computer);

const totalGamesItem = document.createElement("li");
const totalGames = document.createTextNode("Total Games Played");
totalGamesItem.appendChild(totalGames);

// logic for rock
rockButton.textContent = "Rock";
rockButton.className = "rock";
document.body.appendChild(rockButton);
rockButton.addEventListener("click", () => {
  alert("Rock clicked!");
});

// logic for paper
paperButton.textContent = "Paper";
paperButton.className = "paper";
document.body.appendChild(paperButton);
paperButton.addEventListener("click", () => {
  alert("Paper clicked!");
});

// logic for scissors
scissorsButton.textContent = "Scissors";
scissorsButton.className = "scissors";
document.body.appendChild(scissorsButton);
scissorsButton.addEventListener("click", () => {
  alert("Scissors clicked!");
});

// allows to view on clientside page web browser
gameOptions.appendChild(rockButton);
gameOptions.appendChild(paperButton);
gameOptions.appendChild(scissorsButton);
scoreCount.appendChild(playerItem);
scoreCount.appendChild(computerItem);
scoreCount.appendChild(totalGamesItem);

// Game Logic
const winningLogic = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const computerOptions = Object.keys(winningLogic);
const computerMove = () => {
  let randomPick = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[randomPick];
};
