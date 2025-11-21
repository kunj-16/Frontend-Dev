// Q9. Random Math Quiz Generator

// Generate random numbers from 1–20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// List of operators
let operators = ['+', '-', '*', '/'];

// Select a random operator
let operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Calculate answer
switch (operator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        correctAnswer = (num1 / num2).toFixed(2); // round for division
        break;
}

// Print results
console.log(`Question: ${num1} ${operator} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
