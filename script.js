let playerScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".option");

const message = document.querySelector("#message");

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const ComputerResult = document.querySelector("#computer-result");
const yourResult = document.querySelector("#your-result");
const restart = document.querySelector("#restart");


const start=()=>{
options.forEach(option => {
    option.addEventListener("click", () => {
        const playerChoice = option.getAttribute("id");
        playGame(playerChoice);
    })

})};



const playGame = (playerChoice) => {
    const computerChoice = generatecomputerChoice();


    if (playerChoice === computerChoice) {
        draw(playerChoice,computerChoice);
    }
    else {
        let playerWins = true;
        if (playerChoice === "rock") {
            playerWins = computerChoice === "paper" ? false : true;
        }

        else if (playerChoice === "paper") {
            playerWins = computerChoice === "rock" ? true : false;
        }

        else {
            playerWins = computerChoice === "rock" ? false : true;
        }

        showWinner(playerWins, playerChoice, computerChoice);

    }
}

const generatecomputerChoice = () => {
    const choices = ["rock", "paper", "scissor"];

    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];

}


const showWinner = (playerWins, playerChoice, computerChoice) => {
    if (playerWins) {
        playerScore++;
        playerScoreElement.innerHTML = playerScore;
        message.innerText = "You Win !";
        ComputerResult.innerHTML = `computer : ${computerChoice}`
        yourResult.innerHTML = `You : ${playerChoice}`

        message.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScoreElement.innerHTML = computerScore;
        message.innerText = "You Lost!";
        ComputerResult.innerHTML = `computer : ${computerChoice}`
        yourResult.innerHTML = `You : ${playerChoice}`

        message.style.backgroundColor = "red";

    }

}

const draw = (playerChoice,computerChoice) => {
    message.innerText = "It's a Draw. Play again!";
    ComputerResult.innerHTML = `computer : ${computerChoice}`
    yourResult.innerHTML = `You : ${playerChoice}`
    message.style.backgroundColor = "green";
}

restart.addEventListener("click",()=>{
     playerScore = 0;
     computerScore = 0;
     message.innerText = "Choose Your Move";
     message.style.backgroundColor = "black";
     ComputerResult.innerHTML = ""
     yourResult.innerHTML =""
     playerScoreElement.innerHTML = "0";
     computerScoreElement.innerHTML = "0";
     start();


})
start();

