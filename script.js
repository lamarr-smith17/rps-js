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
        console.log("Yikes! The computer won, paper beats rock!")
        return computerCount += 1;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Nice shot! Rock beats scissors!")
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("Heck yes! Paper covers rock!")
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("Aww snap! Scissors cuts through paper!")
        return computerCount += 1;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("+1 for you! Scissors beats paper!")
        return playerCount += 1;
    }else{
        console.log("Ouch! Rock smashes scissors!")
        return computerCount += 1;
    };
};
playGame();

