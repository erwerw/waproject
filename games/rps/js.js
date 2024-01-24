const playerButtons = document.querySelectorAll(".buttons button");
const computerImage = document.getElementById("computer-image");
const result = document.querySelector(".result");
const choices = ["rock", "paper", "scissors"];

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    result.textContent = "";
        imageAnimation((finalComputerChoice) => {

             computerImage.src = `../../images/${finalComputerChoice}.png`;
             // Determine the winner
             const winner = determineWinner(playerChoice, finalComputerChoice);
             // Display the result
             result.textContent = `You chose ${playerChoice}. Computer chose ${finalComputerChoice}. ${winner}!`;

        });
  });
});

function imageAnimation(callback) {
    let animationCount = 0;
    const intervalId = setInterval(() => {
      const randomChoice = choices[Math.floor(Math.random() * 3)];
      computerImage.src = `../../images/${randomChoice}.png`;
  
      animationCount++;
      if (animationCount === 5) {
        clearInterval(intervalId);
        callback(randomChoice); // Call the callback with the final computer choice
      }
    }, 80);
  }

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") 
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}