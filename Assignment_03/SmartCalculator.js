"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
let output = "";

function calculate(op) {
    try {
        let result;
        switch(op) {
            case "add": result = num1 + num2; break;
            case "subtract": result = num1 - num2; break;
            case "divide":
                if(num2 === 0) throw "Divide by zero error";
                result = num1 / num2; break;
            case "power": result = Math.pow(num1, num2); break;
            case "root":
                if(num1 < 0) throw "Root of negative number";
                result = Math.sqrt(num1); break;
            default: throw "InvalidOperationError";
        }
        output += `${op}: ${result}\n`;
    } catch(err) {
        output += `${op}: ${err}\n`;
    }
}

operations.forEach(calculate);
document.getElementById("output").textContent = output;
