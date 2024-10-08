let displayScreen = document.getElementById('display-screen');
let resultScreen = document.getElementById('result-screen');
let buttons = document.querySelectorAll('button');

let firstValue = '';
let secondValue = '';
let operator = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        if (value === 'all-clear') {
            firstValue = '';
            secondValue = '';
            operator = '';
            result = '';
            displayScreen.value = '';
            resultScreen.value = '';
        } else if (value === '=') {
            if (firstValue !== '' && secondValue !== '' && operator !== '') {
                result = calculate(firstValue, secondValue, operator);
                resultScreen.value = result;
                firstValue = result;
                secondValue = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstValue !== '') {
                operator = value;
                displayScreen.value = firstValue + ' ' + operator;
            }
        } else {
            if (operator === '') {
                firstValue += value;
                displayScreen.value = firstValue;
            } else {
                secondValue += value;
                displayScreen.value = firstValue + ' ' + operator + ' ' + secondValue;
            }
        }
    });
});

function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error';
            }
        default:
            return 'Error';
    }
}