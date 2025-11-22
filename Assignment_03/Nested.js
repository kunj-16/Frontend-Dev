"use strict";

let output = "";

function outer() {
    var count = 5;
    output += `Outer count: ${count}\n`;

    const inner = () => {
        let count = 10; // new scope for inner
        output += `Inner count: ${count}\n`;
    }
    inner();
}

outer();
document.getElementById("output").textContent = output;
