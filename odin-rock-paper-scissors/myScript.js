// what version of the game are we playing?
let weapons = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice; 

// generate computers random choice of: rock, paper or scissors
function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * weapons.length);
    computerChoice = weapons[randomNumber];
    return computerChoice;
}

// create variables that keeps track of wins, loses, etc
let computerScore = 0;
let userScore = 0;
let tieCount = 0;
let totalGames = 0;
let matchComment = "";
let endMatchComment = "";

//creates post for single match result
function newMatchResult() {
    let matchResult = document.createElement("li");
    matchResult.appendChild(document.createTextNode(matchComment));
    document.getElementById("matches").appendChild(matchResult);
};

//creates post for end game result
function endGameResult() {
    let endGameResult = document.createElement("p");
    endGameResult.appendChild(document.createTextNode(endMatchComment));
    document.getElementById("matches").appendChild(endGameResult);
}

//function to reset scores and remove posted match history
function resetGame() {
    computerScore = 0;
    userScore = 0;
    tieCount = 0;
    totalGames = 0;
    updateScores();

    let resultList = document.getElementById("matches");
    while (resultList.hasChildNodes()) {
        resultList.removeChild(resultList.firstChild);
    }
}

//make new button that allows user to reset the game
function createResetButton() {
    let makeButton = document.createElement("button");
    makeButton.innerText = "Reset Game";
    let atrb = document.createAttribute("id");
    atrb.value = "resetButton";
    makeButton.setAttributeNode(atrb);
    document.getElementById("matches").appendChild(makeButton);

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener('click', () => {
        resetGame();
    });
}

function updateScores() {
    //post the updated score in each counter
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("tieCount").textContent = tieCount;

    //post a final result after five matches and show a reset game button
    if (totalGames === 5) {
        if (userScore === computerScore) {
            createResetButton();
            endMatchComment = `Five round game complete! Wow! It's a tie! 
            You won ${userScore} rounds and the computer also won ${computerScore} rounds. 
            There were ${tieCount} tied rounds.`;
            endGameResult();
        }
        else if (userScore > computerScore) {
            createResetButton();
            endMatchComment = `Five round game complete! You are the winner!! 
            Overall, you won ${userScore} rounds and the computer won ${computerScore} rounds. 
            There were ${tieCount} tied rounds.`;
            endGameResult();
        }
        else if (computerScore > userScore) {
            createResetButton();
            endMatchComment = `Five round game complete! Sorry, the computer wins! 
            Overall, you won ${userScore} rounds and the computer won ${computerScore} rounds. 
            There were ${tieCount} tied rounds.`;
            endGameResult();
        }
    }
};

// create a function that plays a single round of RPS
// have it return strings like "scissors beats paper, you lose."
function playOnce() {
    computerChoice = generateComputerChoice();
        if (userChoice === computerChoice) {
            matchComment = `It's a tie! You picked ${userChoice} and the computer also picked ${computerChoice}.`;
            newMatchResult();
            tieCount++;
            totalGames++;
            updateScores();
        }
        else if ((userChoice === "rock") && (computerChoice === "scissors")) {
            matchComment = `You win! You picked rock and the computer picked scissors. Rock beats scissors.`;
            newMatchResult();
            userScore++;
            totalGames++;
            updateScores();
        }
        else if ((userChoice === "rock") && (computerChoice === "paper")) {
            matchComment = `You lose! You picked rock and the computer picked paper. Paper beats rock.`;
            newMatchResult();
            computerScore++;
            totalGames++;
            updateScores();
        }
    
        else if ((userChoice === "paper") && (computerChoice === "rock")) {
            matchComment = `You win! You picked paper and the computer picked rock. Paper beats rock.`;
            newMatchResult();
            userScore++;
            totalGames++;
            updateScores();
        }
        else if ((userChoice === "paper") && (computerChoice === "scissors")) {
            matchComment = `You lose! You picked paper and the computer picked scissors. Scissors beat paper.`;
            newMatchResult();
            computerScore++;
            totalGames++;
            updateScores();
        }
    
        else if ((userChoice === "scissors") && (computerChoice === "paper")) {
            matchComment = `You win! You picked scissors and the computer picked paper. Scissors beat paper.`;
            newMatchResult();
            userScore++;
            totalGames++;
            updateScores();
        }
        else if ((userChoice === "scissors") && (computerChoice === "rock")) {
            matchComment = `You lose! You picked scissors and the computer picked rock. Rock beats scissors.`;
            newMatchResult();
            computerScore++;
            totalGames++;
            updateScores();
        }
}

//create eventListeners for the buttons that initiate a match of rps
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
rock.addEventListener( 'click', () => {
    userChoice = "rock";
    playOnce();
});

paper.addEventListener( 'click', () => {
    userChoice = "paper";
    playOnce();
});

scissors.addEventListener( 'click', () => {
    userChoice = "scissors";
    playOnce();
});