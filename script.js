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
    var computerSelection = computerPlay();
    if (playerSelection == "rock" && computerSelection == "Rock"){
        return "This is a tie game! Nice!";
    }else if(playerSelection == "rock" && computerSelection == "Paper"){
        return "You Lost... Paper beats rock :(";
    }else if(playerSelection == "rock" && computerSelection == "Scissors"){
        return "Nice one! Rock beats scissors!";
    }else if(playerSelection == "paper" && computerSelection == "Rock"){
        return "Good prediction! Paper beats rock!";
    }else if(playerSelection == "paper" && computerSelection == "Paper"){
        return "It's a tie game! Let's go again!";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "Yikes, the computer got you! Scissors beats paper!"
    }else if(playerSelection == "scissors" && computerSelection == "Rock"){
        return "Ouch! Rock smashes scissors!";
    }else if(playerSelection == "scissors" && computerSelection == "Paper"){
        return "Good one! Scissors slashes paper!";
    }else{
        return "It's a tie!"
    };
};
playGame(playerSelection,computerSelection);