"use strict";

let output = "";

function demo(a, b) {
    let total = 10; // fixed declaration
    output += `Total: ${total}\n`;
}

demo(5, 10);
document.getElementById("output").textContent = output;
