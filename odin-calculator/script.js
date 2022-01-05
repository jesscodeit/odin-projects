let num1;
let num2;
let result;
let displayBox = document.getElementById('display-box');
let displayText = '0';
let firstOperand = Number(displayText);
let secondOperand;
let chosenOperator;
let operandButtons = document.getElementsByClassName('operand');
let operatorButtons = document.getElementsByClassName('operator');
let equals = document.getElementById('equals');
let clearButton = document.getElementById('clear');
let backButton = document.getElementById('delete');
let allButtons = document.querySelectorAll('button');

function roundIt(theNumber) {
    Number(theNumber);
    return parseFloat(Math.round(theNumber + 'e' + 5) + 'e-' + 5);
}

function updateDisplay() {
    displayText = String(displayText);
    if (displayText.length > 13) {
        displayText = displayText.substring(0, 13);
    }
    displayBox.innerText = displayText;
}
updateDisplay();

function add(num1, num2) {
    result = roundIt(num1 + num2) ;
    return result;
}

function subtract(num1, num2) {
    result = roundIt(num1 - num2);
    return result;
}

function multiply(num1, num2) {
    result = roundIt(num1 * num2);
    return result;
}

function divide(num1, num2) {
    result = roundIt(num1 / num2);
    return result;
}

function operate(num1, num2, operator) {
    if(operator === '+') {
        return add(num1, num2);
    } else if(operator === '-') {
        return subtract(num1, num2);
    } else if(operator === '*') {
        return multiply(num1, num2);
    } else if(operator === '/') {
        if(num2 === 0) {
            result = 'nej';
            return result;
        } else {
             return divide(num1, num2);   
        }
    }
}

// Event listeners for buttons and keys 

for (i=0; i < operandButtons.length; i++){
    operandButtons[i].addEventListener('click', function(){
        if(this.value === '.' && String(displayText).includes('.')){
            return;
        } else if(String(displayText) === '0' || Number(displayText) === firstOperand) {
            displayText = this.value;
        } else if (isNaN(String(displayText))) {
            displayText = this.value;
        } else if (displayText.length > 13) {
            return;
        } else {
            displayText += this.value;
        }
        updateDisplay();
    });
}

for (i=0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click', function(){
        if(firstOperand && chosenOperator){
            secondOperand = Number(displayText);
            operate(firstOperand, secondOperand, chosenOperator);
            displayText = result;
            updateDisplay();
            firstOperand = Number(displayText);
            chosenOperator = this.value;
            secondOperand = null;
        } else {
            firstOperand = Number(displayText);
            chosenOperator = this.value;
        }
    });
}

equals.addEventListener('click', function(){
    if(chosenOperator != null) {
        if(!secondOperand){
        secondOperand = Number(displayText);
        }
        operate(firstOperand, secondOperand, chosenOperator);
        displayText = result;
        updateDisplay();
        firstOperand = Number(displayText);
        secondOperand = null;
        chosenOperator = null;
    }
});

clearButton.addEventListener('click', function(){
    result = null;
    displayText = '0';
    firstOperand = Number(displayText);
    secondOperand = null;
    chosenOperator = null;
    updateDisplay();
});

backButton.addEventListener('click', function(){
    if (displayText === '0') {
        return;
    } else if (displayText.length === 1) {
        displayText = '0';
    } else if (displayText.length > 1) {
        displayText = displayText.slice(0, -1);
    }
    updateDisplay();
    chosenOperator = null;
});

window.addEventListener('keydown', (e) => {
    for (i=0; i < allButtons.length; i++) {
        if (e.key === allButtons[i].value) {
            allButtons[i].click();
        } else if (e.key === 'Enter') {
            allButtons[16].click();
        }
    }
});