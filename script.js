var playerCount = 0;
var computerCount = 0;
const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
rockButton.innerHTML = 'Rock';
paperButton.innerHTML = 'Paper';
scissorsButton.innerHTML = 'Scissors';
container.append(rockButton, paperButton, scissorsButton);

const resultDiv = document.createElement('div');
resultDiv.classList.add('resultDiv');
container.append(resultDiv);
const resultText = document.createElement('p');
resultText.classList.add('resultText');
resultDiv.append(resultText);

rockButton.addEventListener ('click', () =>{
    let playerSelection = "rock";
    playRound(playerSelection);
});

paperButton.addEventListener ('click', () =>{
    let playerSelection = 'paper';
    playRound(playerSelection)
});

scissorsButton.addEventListener ('click', () =>{
    let playerSelection = 'scissors';
    playRound(playerSelection)
});


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


function playRound(playerSelection) {
    let computerSelection = computerPlay().toLowerCase();
    if (playerSelection == computerSelection){ 
        resultText.innerHTML = "It's a tie!";           
        return null;
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        resultText.innerHTML = "Yikes! The computer won, paper beats rock! Computer wins!";
        return computerCount += 1;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        resultText.innerHTML = "Nice shot! Rock beats scissors! Player wins!";
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        resultText.innerHTML = "Heck yes! Paper covers rock! Player wins!";
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        resultText.innerHTML = "Aww snap! Scissors cuts through paper! Computer wins!";
        return computerCount += 1;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        resultText.innerHTML = "+1 for you! Scissors beats paper! Player wins!";
        return playerCount += 1;
    }else{
        resultText.innerHTML = "Ouch! Rock smashes scissors! Computer wins!";
        return computerCount += 1;
    };
};

// function scoreTrack(playerCount, computerCount)
// {
//     let playerTally = 0;
//     let computerTally = 0;
//     if (scoreTrack == playerCount){
//         tally += 1;
//         console.log(playerTally);
//     }else if (scoreTrack == computerCount){
//         computerTally += 1;
//         console.log(computerTally);
//     };
    
//     if (playerTally == 5){
//         console.log('Player wins!');
//     }else if (computerTally == 5){
//         console.log('Computer wins!');
//     };
// };





// function game(){
//     // for (let i = 0; i < 5; i++){
//     //     playRound();              
//     // };
//     if (playerCount == computerCount){
//         console.log("You have won " + playerCount + " " + "out of 5 and the computer won " + computerCount + " " + "out of 5... Meaning it's a tie! Not bad!");
//     }else if (playerCount > computerCount){
//         console.log("You have won " + playerCount + " " + "out of 5... Meaning you WON!! :D");
//     } else {
//         console.log("The computer won " + computerCount + " " + "out of 5... Meaning you lost... D:");
//     };
//     console.log("Player: " + playerCount +" " + "Computer: "+ computerCount);
// };

