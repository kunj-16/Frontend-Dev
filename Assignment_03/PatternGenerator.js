"use strict";

let output = "";
let limit = 5;

for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    output += line + "\n";
}

document.getElementById("output").textContent = output;
