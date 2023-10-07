// html skeleton
const mainDiv = document.createElement("div");
mainDiv.className = "main";
document.body.appendChild(mainDiv);

// buttons
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

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

mainDiv.appendChild(rockButton);
mainDiv.appendChild(paperButton);
mainDiv.appendChild(scissorsButton);
