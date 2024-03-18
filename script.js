
let displayValue = '0';
let expression = '';

const displayElement = document.getElementById('display');

function clearDisplay() {
  displayValue = '0';
  expression = '';
  updateDisplay();
}

function appendToDisplay(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  expression += value;
  updateDisplay();
}

function setOperator(op) {
  if (expression !== '') {
    const lastChar = expression.slice(-1);
    if (!isNaN(lastChar) || lastChar === '.') { // Check if last character is a number or decimal point
      expression += op;
      displayValue = expression;
      updateDisplay();
    }
  }
}

function calculate() {
  try {
    const result = eval(expression);
    displayValue = result.toString();
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    expression = '';
    updateDisplay();
  }
}

function updateDisplay() {
  displayElement.textContent = displayValue;
}
