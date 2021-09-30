function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random()*choices.length);
    if (randomNum == 0){
        return "Rock"
    };
    if (randomNum == 1){
        return "Paper"
    };
    if (randomNum == 2){
        return "Scissors"
    };
};
computerPlay();

function playGame(playerSelection, computerSelection) {
    var playerSelection = prompt("Welcome to Rock-Paper-Scissors! Please enter your choice:")
    var playerSelection = playerSelection.toLowerCase();
    var computerSelection = computerPlay().toLowerCase();
    var playerCount = 0;
    var computerCount = 0;
    if (playerSelection == computerSelection){
        return "Its a tie!";
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        return computerCount += 1;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return computerCount += 1;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return playerCount += 1;
    }else{
        return computerCount += 1;
    };
};
playGame(playerSelection, computerSelection);
console.log("Player Wins: {} Computer Wins: {}", playerCount, computerCount);

