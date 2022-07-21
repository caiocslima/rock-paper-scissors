let playerSelection = getPlayerChoice();

let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

function getComputerChoice () {
    const options = ["Rock", "Paper","Scissors"];
    let index = Math.floor(Math.random() * 3);
   console.log("Computer choice: " + options[index]);
    return options[index];
}
function capitalize (text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
function getPlayerChoice () {
    let option = prompt("Please enter your choice: Rock, Paper or Scissors");
    option = capitalize(option);
    console.log("Your choice: " + option);
    return option;
}
function playRound (player,computer) {
    if (player == "Rock" && computer == "Paper") {
        console.log("You lose! Paper beats Rock.");
    }
    else if (player == "Paper" && computer == "Rock") {
        console.log("You win! Paper beats Rock.");
    }
    else if (player == "Rock" && computer == "Scissors") {
        console.log("You win! Rock beats Scissors.");
    }
    else if (player == "Scissors" && computer == "Rock") {
        console.log("You lose! Rock beats Scissors.");
    }
    else if (player == "Paper" && computer == "Scissors") {
        console.log("You lose! Scissors beats Paper.");
    }
    else if (player == "Scissors" && computer == "Paper") {
        console.log("You win! Scissors beats Paper.");
    }
    else {
        console.log("It's a draw!");
    }
}