"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let output = "";

rawData.forEach((entry, index) => {
    try {
        let obj = JSON.parse(entry);
        if (!obj.user || !obj.age) throw "Missing keys";
        obj.age = Number(obj.age);
        if(obj.age >= 18) cleanData.push(obj);
    } catch(err) {
        output += `Line ${index + 1} error: ${err}\n`;
    }
});

output += `\nClean Data: ${JSON.stringify(cleanData)}`;
document.getElementById("output").textContent = output;
