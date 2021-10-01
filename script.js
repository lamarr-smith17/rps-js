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

function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt("Welcome to Rock-Paper-Scissors! Please enter your choice:")
    var playerSelection = playerSelection.toLowerCase();
    var computerSelection = computerPlay().toLowerCase();
    var playerCount = 0;
    var computerCount = 0;
    if (playerSelection == computerSelection){
        return "Its a tie!";
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("Yikes! The computer won, paper beats rock! Computer wins!")
        return computerCount += 1;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Nice shot! Rock beats scissors! Player wins!")
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("Heck yes! Paper covers rock! Player wins!")
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("Aww snap! Scissors cuts through paper! Computer wins!")
        return computerCount += 1;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("+1 for you! Scissors beats paper! Player wins!")
        return playerCount += 1;
    }else{
        console.log("Ouch! Rock smashes scissors! Computer wins!")
        return computerCount += 1;
    };
};

playRound();
playRound();
playRound();
playRound();
playRound();


