console.log('hi');
const getUserChoice = (userInput) => {
  if (userInput.toLowerCase() === "paper") return userInput;
  else if (userInput.toLowerCase() === "rock") return userInput;
  else if (userInput.toLowerCase() === "scissors") return userInput;
  else if (userInput === "bomb") return userInput;
  else console.log("Escolha inválida!");
}
function getComputerChoice() {
  let aleatorio = Math.floor(Math.random() * 3);
  if (aleatorio == 1) return "rock"
  if (aleatorio == 2) return "paper"
  else return "scissors"
}
function determineWinner(userChoice,computerChoice) {
  if (userChoice === "bomb") return "You won!"
  if (userChoice === computerChoice) return "Empate!"
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    }else {
      return "You won!";
    }
  }

  if(userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    }else {
      return "You won!"
    }
  }
  if(userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    }else {
      return "You won!";
    }
  }
}

function playGame(user) {
  let userChoice = getUserChoice(user);
  let computerChoice = getComputerChoice();
  console.log(userChoice,computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame("scissors");