/*Buttons*/
const container = document.querySelector('.btn-container');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

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
document.body.append(resultDiv);
const resultText = document.createElement('p');
resultText.classList.add('resultText');
resultDiv.append(resultText);

/*The Counters*/
let playerCount = 0;
let computerCount = 0;
const playerText = document.createElement('p');
const computerText = document.createElement('p');
const counterDiv = document.createElement('div');
playerText.id = 'playerText';
computerText.id = 'computerText';
counterDiv.classList.add('counterDiv');
document.body.append(counterDiv);
counterDiv.append(playerText);
counterDiv.append(computerText);
playerText.innerHTML = 'Player: 0';
computerText.innerHTML = 'Computer: 0'; 

/* Break Div to move play again button to bottom of counters*/ 
const breakDiv = document.createElement('div');
breakDiv.classList.add('break');
counterDiv.appendChild(breakDiv);

/* Play Again Button */
const againBtn = document.createElement('button');
againBtn.id = 'againBtn';
againBtn.innerHTML = 'Play Again?';
breakDiv.append(againBtn)
againBtn.addEventListener('click', playAgain); 

/* Functions */
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
        resultText.innerHTML = "Yikes! The computer won, paper beats rock!";
        return computerCount += 1;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        resultText.innerHTML = "Nice shot! Rock beats scissors!";
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        resultText.innerHTML = "Heck yes! Paper covers rock!";
        return playerCount += 1;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        resultText.innerHTML = "Aww snap! Scissors cuts through paper!";
        return computerCount += 1;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        resultText.innerHTML = "+1 for you! Scissors beats paper!";
        return playerCount += 1;
    }else{
        resultText.innerHTML = "Ouch! Rock smashes scissors!";
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
        againBtn.style.display = 'block';
    }
    if(computerCount == 5){
        resultText.innerHTML = 'Computer won. Better luck next time.';
        againBtn.style.display = 'block';
    }
}

function playAgain(){
    playerCount = 0;
    computerCount = 0;
    resultText.innerHTML = "";
    playerText.innerHTML = "Player: 0";
    computerText.innerHTML = "Computer: 0";
    againBtn.style.display = 'none';
};

