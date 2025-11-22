"use strict";

const output = document.getElementById("output");

function greetUser(name, callback) {
    output.textContent += `Hello ${name}\n`;
    callback();
}

function showEndMessage() {
    output.textContent += "Welcome to the course!\n";
}

// Demonstrate
greetUser("Kunj", showEndMessage);
