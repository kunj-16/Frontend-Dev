"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

let output = "";

employees.forEach(emp => {
    try {
        if (!emp.salary || !emp.years || !emp.name) throw "Missing property";

        let salary = Number(emp.salary);
        let years = Number(emp.years);

        if (isNaN(salary) || isNaN(years)) throw "Invalid number conversion";

        let bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        output += `${emp.name}: Salary = ${salary}, Years = ${years}, Bonus = ${bonus}\n`;
    } catch (err) {
        output += `Error processing ${emp.name || "Unknown"}: ${err}\n`;
    }
});

document.getElementById("output").textContent = output;
