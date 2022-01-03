let num1;
let num2;
let result;
let displayBox = document.getElementById('display-box');
let displayText = '0';
let firstOperand = Number(displayText);
let secondOperand;
let chosenOperator;

function updateDisplay() {
    displayBox.innerText = displayText;
}
updateDisplay();

function add(num1, num2) {
    result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    result = num1 / num2;
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
            return 'nope';
        } else {
             return divide(num1, num2);   
        }
    }
}

operandButtons = document.getElementsByClassName('operand');
for (i=0; i < operandButtons.length; i++){
    operandButtons[i].addEventListener('click', function(){
        if(displayText == '0' || displayText == firstOperand) {
            displayText = this.value;
        } else {
            displayText += this.value;
        }
        updateDisplay();
    });
}

operatorButtons = document.getElementsByClassName('operator');
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

equals = document.getElementById('equals');
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

})
