game();

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
        let result = "You lose! Paper beats Rock.";
        return result;
    }
    else if (player == "Paper" && computer == "Rock") {
        let result = "You win! Paper beats Rock.";
        return result;
    }
    else if (player == "Rock" && computer == "Scissors") {
        let result = "You win! Rock beats Scissors.";
        return result;
    }
    else if (player == "Scissors" && computer == "Rock") {
        let result = "You lose! Rock beats Scissors.";
        return result;
    }
    else if (player == "Paper" && computer == "Scissors") {
        let result = "You lose! Scissors beats Paper.";
        return result;
    }
    else if (player == "Scissors" && computer == "Paper") {
        let result = "You win! Scissors beats Paper.";
        return result;
    }
    else {
        let result = "It's a draw!";
        return result;
    }
}
    function game() {
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 1; i <= 5; i++) {
            let playerSelection = getPlayerChoice();
            let computerSelection = getComputerChoice();
            console.log("Round " + i + " result: " + playRound(playerSelection, computerSelection));
            let result = playRound(playerSelection, computerSelection);
            if (result.charAt(4) == "w") {
                playerScore++;
            }
            else if (result.charAt(4) == "l") {
                computerScore++;
            }
    }
    if (playerScore > computerScore) {
        console.log("You won the match! " + playerScore + " x " + computerScore);
    }
    else if (computerScore > playerScore) {
        console.log("You lost the match! " + computerScore + " x " + playerScore);
        }
    else {
        console.log("It's a draw!");
        }
    }

