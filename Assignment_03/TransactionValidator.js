"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];
let output = "";

transactions.forEach((tx, index) => {
    try {
        if (!tx) throw "Null transaction";
        if (tx.id === undefined || tx.amount === undefined) throw "Missing id or amount";
        if (tx.amount < 0) throw "Negative amount";

        valid.push(tx);
        output += `Transaction ${tx.id} valid: ${tx.amount}\n`;
    } catch (err) {
        invalid.push(tx);
        output += `Transaction ${index + 1} invalid: ${err}\n`;
    }
});

output += `\nValid Transactions: ${valid.length}\nInvalid Transactions: ${invalid.length}`;
document.getElementById("output").textContent = output;
