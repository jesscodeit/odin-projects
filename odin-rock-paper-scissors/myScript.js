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

// create a function that plays a single round of RPS
// have it return strings like "scissors beats paper, you lose."
function playOnce() {
    computerChoice = generateComputerChoice();
    userChoice = prompt("What is your choice? Rock, paper or scissors?").toLowerCase();
    if (userChoice === computerChoice) {
        alert(`It's a tie! You picked ${userChoice} and the computer also picked ${computerChoice}.`);
        tieCount++;
    }
    else if ((userChoice = "rock") && (computerChoice = "scissors")) {
        alert(`You win! You picked ${userChoice} and the computer picked ${computerChoice}. Rock beats scissors.`);
        userScore++;
    }
    else if ((userChoice = "rock") && (computerChoice = "paper")) {
        alert(`You lose! You picked ${userChoice} and the computer picked ${computerChoice}. Paper beats rock.`);
        computerScore++;
    }

    else if ((userChoice = "paper") && (computerChoice = "rock")) {
        alert(`You win! You picked ${userChoice} and the computer picked ${computerChoice}. Paper beats rock.`);
        userScore++;
    }
    else if ((userChoice = "paper") && (computerChoice = "scissors")) {
        alert(`You lose! You picked ${userChoice} and the computer picked ${computerChoice}. Scissors beat paper.`);
        computerScore++;
    }

    else if ((userChoice = "scissors") && (computerChoice = "paper")) {
        alert(`You win! You picked ${userChoice} and the computer picked ${computerChoice}. Scissors beat paper.`);
        userScore++;
    }
    else if ((userChoice = "scissors") && (computerChoice = "rock")) {
        alert(`You lose! You picked ${userChoice} and the computer picked ${computerChoice}. Rock beats scissors.`);
        computerScore++;
    }
}

// create a function that plays a five round game of RPS
// have it keep score and report winner/loser at the end
function playFive() {
    playOnce();
    generateComputerChoice();
    playOnce();
    generateComputerChoice();
    playOnce();
    generateComputerChoice();
    playOnce();
    generateComputerChoice();
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

}