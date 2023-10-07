// buttons
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

// logic for rock
rockButton.textContent = "Rock";
document.body.appendChild(rockButton);
rockButton.addEventListener("click", () => {
  alert("Rock clicked!");
});

// logic for paper
paperButton.textContent = "Paper";
document.body.appendChild(paperButton);
paperButton.addEventListener("click", () => {
  alert("Paper clicked!");
});

// logic for scissors
scissorsButton.textContent = "Scissors";
document.body.appendChild(scissorsButton);
scissorsButton.addEventListener("click", () => {
  alert("Scissors clicked!");
});
