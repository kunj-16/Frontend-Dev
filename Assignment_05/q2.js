"use strict";

const output = document.getElementById("output");

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const arr = [1,2,3,4];

const doubled = applyOperation(arr, n => n * 2);
const squared = applyOperation(arr, n => n * n);

output.textContent += `Doubled: ${doubled}\n`;
output.textContent += `Squared: ${squared}\n`;
