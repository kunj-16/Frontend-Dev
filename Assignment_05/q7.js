"use strict";

const output = document.getElementById("output");

function makeMultiplier(multiplier){
    return function(number){
        return number * multiplier;
    }
}

const triple = makeMultiplier(3);
output.textContent += `Triple of 5: ${triple(5)}\n`;

// Explanation: `multiplier` is captured in closure
