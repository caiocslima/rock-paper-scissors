function getComputerChoice () {
    const options = ["Rock", "Paper","Scissors"];
    let index = Math.floor(Math.random() * 3);
    console.log(options[index]);
    return options[index];
}

function getPlayerChoice () {
    let option = prompt("Please enter your choice: Rock, Paper or Scissors");
    option.charAt(0).toUpperCase;
    let rest = option.slice(1);
    rest.toLowerCase;
    console.log(option+rest);
    return option + rest;
}

getPlayerChoice ();

let computerSelection = getComputerChoice ();

function gameRound (playerSelection, computerSelection) {

}