"use strict";

let output = "";

// Fixed hoisting
var score = 50;
function announce() { output += "Game started\n"; }
let status = "ready";
const startGame = () => { output += `Status: ${status}\n`; }

try {
    output += `Score: ${score}\n`;
    announce();
    startGame();
} catch (err) {
    output += `Error: ${err}\n`;
}

document.getElementById("output").textContent = output;
