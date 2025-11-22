function calculateMath() {
    let x = 16.75;

    let roundedValue = Math.round(x);
    let sqrtValue = Math.sqrt(x);
    let powerValue = Math.pow(x, 3);
    let randomValue = Math.floor(Math.random() * 41) + 10; // 10–50 range

    let summary = `
        <strong>Math Results:</strong><br>
        Original Number: ${x} <br>
        Rounded Value: ${roundedValue} <br>
        Square Root: ${sqrtValue.toFixed(2)} <br>
        ${x}³ = ${powerValue.toFixed(2)} <br>
        Random Number (10–50): ${randomValue}
    `;

    document.getElementById("result").innerHTML = summary;
}
