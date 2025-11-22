"use strict";

let output = "";

function showMessage() {
    try {
        let greeting = "Welcome"; // fixed declaration
        output += `Greeting: ${greeting}\n`;
        console.log(greeting);
    } catch (err) {
        output += `Error: ${err}\n`;
    }
}

showMessage();
document.getElementById("output").textContent = output;
