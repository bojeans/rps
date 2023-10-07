// html skeleton
const gameOptions = document.createElement("div");
gameOptions.className = "main";
document.body.appendChild(gameOptions);

const scoreCount = document.createElement("div");
scoreCount.className = "score";
document.body.appendChild(scoreCount);

// variables
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const player = document.createTextNode("Player Score");
const computer = document.createTextNode("Computer Score");
const totalGames = document.createTextNode("Total Games Played");

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
