const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];
let report = "";

function isValidNumber(value) {
    let num = Number(value);
    return !isNaN(num) && value !== null && value !== undefined && value !== " ";
}

for (let item of apiData) {
    let numberForm = Number(item);
    let booleanForm = Boolean(item);
    let stringForm = String(item);

    report += `
Original: ${item}
→ Number: ${numberForm}
→ Boolean: ${booleanForm}
→ String: "${stringForm}"
---------------------------\n`;

    if (isValidNumber(item)) {
        validNumbers.push(numberForm);
    } else {
        invalidNumbers.push(item);
    }
}

report += `
VALID NUMBERS: ${JSON.stringify(validNumbers)}
INVALID VALUES: ${JSON.stringify(invalidNumbers)}
`;

document.getElementById("output").textContent = report;
