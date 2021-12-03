// what version of the game are we playing?
let weapons = ["rock", "paper", "scissors"];
let computerChoice;

// generate computers random choice of: rock, paper or scissors
function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * weapons.length);
    computerChoice = weapons[randomNumber];
    return computerChoice;
}

//assign the randomly chosen move to computerChoice, see if it works
//computerChoice = generateComputerChoice();
//alert(`The computer chose ${computerChoice}.`);

// prompt the user to choose: rock, paper or scissors
// ensure user selection is case-insensitive 
let userChoice; //removed the prompt and let it occur in function playOnce

// create variables that keeps track of wins / losses for each player
let computerScore = 0;
let userScore = 0;
let tieCount = 0;
let totalGames = 0;
let matchComment = "";
let endMatchComment = "";

function newMatchResult() {
    let matchResult = document.createElement("li");
    matchResult.appendChild(document.createTextNode(matchComment));
    document.getElementById("matches").appendChild(matchResult);
};

function endGameResult() {
    let endGameResult = document.createElement("p");
    endGameResult.appendChild(document.createTextNode(endMatchComment));
    document.getElementById("matches").appendChild(endGameResult);
}

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

function updateScores() {
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("tieCount").textContent = tieCount;

    if (totalGames === 5) {
        //figure out way to replace pick your weapon and buttons, with reset and play again option.

        if (userScore === computerScore) {
            endMatchComment = `Five round game complete! Wow! It's a tie! 
            You won ${userScore} rounds and the computer also won ${computerScore} rounds. 
            There were ${tieCount} tied rounds.`;
            endGameResult();
        }
        else if (userScore > computerScore) {
            endMatchComment = `Five round game complete! You are the winner!! 
            Overall, you won ${userScore} rounds and the computer won ${computerScore} rounds. 
            There were ${tieCount} tied rounds.`;
            endGameResult();
        }
        else if (computerScore > userScore) {
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

//new code below for game with UI

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


function newMatchResult() {
    let matchResult = document.createElement("li");
    matchResult.appendChild(document.createTextNode(matchComment));
    document.getElementById("matches").appendChild(matchResult);
};

// create a function that plays a five round game of RPS
// have it keep score and report winner/loser at the end

//giving game UI, remove option to play five 
/* function playFive() {
    userScore = 0;
    computerScore = 0;
    tieCount = 0;

    playOnce();

    playOnce();

    playOnce();

    playOnce();

    playOnce();

    if (userScore === computerScore) {
        alert(`Five round game complete! Wow! It's a tie! You won ${userScore} rounds and the computer also won ${computerScore} rounds. There were ${tieCount} tied rounds.`);
    }

    else if (userScore > computerScore) {
        alert(`Five round game complete! You are the winner!! Overall, you won ${userScore} rounds and the computer won ${computerScore} rounds. There were ${tieCount} tied rounds.`);
    }

    else if (userScore < computerScore) {
        alert(`Five round game complete! Sorry, the computer wins! Overall, you won ${userScore} rounds and the computer won ${computerScore} rounds. There were ${tieCount} tied rounds.`);
    }

} */