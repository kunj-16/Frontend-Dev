// Q8. Employee Salary Projection

let currentSalary = 40000; // Example current salary (monthly or yearly based on requirement)
let incrementRate = 10; // Increment rate in %

let salaries = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (incrementRate / 100); // Apply increment using assignment
    salaries.push({
        Year: year,
        "Projected Salary": Math.round(currentSalary)
    });
}

// Print output in table format
console.table(salaries);
