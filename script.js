/* Start of code*/
var playerCount = 0;
var computerCount = 0;
const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

/*Buttons*/
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
rockButton.innerHTML = 'Rock';
paperButton.innerHTML = 'Paper';
scissorsButton.innerHTML = 'Scissors';
container.append(rockButton, paperButton, scissorsButton);
rockButton.addEventListener ('click', () =>{
    let playerSelection = "rock";
    playRound(playerSelection);
    gameCount(playerCount, computerCount);
});

paperButton.addEventListener ('click', () =>{
    let playerSelection = 'paper';
    playRound(playerSelection)
    gameCount(playerCount, computerCount);
});

scissorsButton.addEventListener ('click', () =>{
    let playerSelection = 'scissors';
    playRound(playerSelection)
    gameCount(playerCount, computerCount);
});
/* Results container*/
const resultDiv = document.createElement('div');
resultDiv.classList.add('resultDiv');
container.append(resultDiv);
const resultText = document.createElement('p');
resultText.classList.add('resultText');
resultDiv.append(resultText);

/*The Counters*/
const playerText = document.createElement('p');
const computerText = document.createElement('p');
playerText.id = 'playerText';
computerText.id = 'computerText';
resultDiv.append(playerText);
resultDiv.append(computerText);
playerText.innerHTML = 'Player: 0';
computerText.innerHTML = 'Computer: 0';


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

function gameCount(playerCount, computerCount){
    if(playerCount){
        playerText.innerHTML = 'Player: ' + playerCount;
    }
    if (computerCount){
        computerText.innerHTML = 'Computer: ' + computerCount;
    }
    winner();
}

function winner(){
    if(playerCount == 5){
        resultText.innerHTML = 'You won! Great job!';
    }
    if(computerCount == 5){
        resultText.innerHTML = 'Computer won. Better luck next time.';
    }
}
