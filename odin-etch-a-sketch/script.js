//creates a single pixel block for the grid
function createPixels() {
    let makeDiv = document.createElement('div');
    let makeClass = document.createAttribute('class');
    makeClass.value = "pixel";
    makeDiv.setAttributeNode(makeClass);
    document.getElementById('sketchBoard').appendChild(makeDiv);
}

//create the board, grid initially set to 16 by 16 blocks
let boardWidth = 16;

function buildBoard() {
    for (let i = 0; i < (boardWidth ** 2); i++) {
        createPixels();
    }
}
buildBoard();

function destroyBoard() {
    let board = document.getElementById('sketchBoard');
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

let userNum;
function promptForNum() {
    userNum = prompt("How many pixels wide should the new board be? \nThe maximum width is 100.", "42");
    console.log(userNum);
}

function checkUserNum() {
    if (isNaN(userNum)) {
        alert("That is not a number! Oh well, here is the original board.");
        userNum = 16;
    }
    else if (userNum == null) {
        alert("Did you mean to press that button? Oh well, here is the original board.");
        userNum = 16;
    }
    else if (userNum > 100) {
        alert("Wow, that's a bit much. How about we just make it 100 by 100.");
        userNum = 100;
        boardWidth = userNum;
    }
    else {
        alert(`Okay! Let's make it ${userNum} pixels wide!`);
        boardWidth = userNum;
    }
}

function resetBoardSize() {
    document.getElementById("sketchBoard").style.gridTemplateColumns = `repeat(${userNum}, 1fr)`;
    document.getElementById("sketchBoard").style.gridTemplateRows = `repeat(${userNum}, 1fr)`;
}

function clickReset() {
    destroyBoard();
    promptForNum();
    checkUserNum();
    resetBoardSize();
    buildBoard();
    makeItPaintable();
}

document.getElementById("resetButton").addEventListener('click', clickReset);

//on mouseover, change the color of the "pixel" div
function makeItPaintable() {
    document.querySelectorAll('.pixel').forEach(function(e) {
    e.addEventListener('mouseover', function() {
        e.style.backgroundColor = 'rgb(171, 171, 182)';
    });
});
}
makeItPaintable();

//on mouseover, change the "pixel" color to the default solid color
document.getElementById("solidButton").addEventListener("click", makeItPaintable);

//on mouseover, change the "pixel" color to a random color
function makeItRainbow() {
    document.querySelectorAll('.pixel').forEach(function(e) {
    e.addEventListener('mouseover', function() {
        e.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    });
});
}
document.getElementById("rainbowButton").addEventListener("click", makeItRainbow);


