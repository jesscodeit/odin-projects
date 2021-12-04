//creates a single pixel block for the grid
function createPixels() {
    let makePixel = document.createElement('div');
    let classMe = document.createAttribute('class');
    classMe.value = "pixel noPaint";
    makePixel.setAttributeNode(classMe);
    document.getElementById('pixelContainer').appendChild(makePixel);
}

//create the board, grid initially set to 16 by 16 blocks
let boardWidth = 16;
function buildBoard() {
    for (let i = 0; i < (boardWidth ** 2); i++) {
        createPixels();
    }
}
buildBoard();

//remove all pixel divs
function destroyBoard() {
    let board = document.getElementById('pixelContainer');
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

//on mouseover, change the color of the pixel block
let pixels = document.querySelectorAll('.pixel');
function paintBrush() {
    pixels.forEach(function (i) {
    i.addEventListener('mouseover', function() {
        i.classList.add('paint');
        });
    });
}
paintBrush();

//removes paint class from board pixels
let reset = document.querySelector('button');
reset.addEventListener('click', () => {
    pixels.forEach(function(element) {
        element.classList.remove('paint');
    });
    promptForNum();
});

// prompt user for new number
let userNum;
function promptForNum() {
    userNum = prompt("How many pixels wide should the new board be? \nThe maximum width is 100.", "42");
    console.log(userNum);
    if (isNaN(userNum)) {
        alert("That is not a number! Oh well, here is the same board.");
    }
    else {
        alert(`Okay! Let's make it ${userNum} pixels wide!`);
        boardWidth = userNum;
        destroyBoard();
        buildBoard();
        paintBrush();
    }
}