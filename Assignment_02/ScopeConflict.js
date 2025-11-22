// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable inside function
    let salary = 40000;
    let totalSalary;

    if (isPermanent) {
        totalSalary = salary + bonus; // Bonus added only for permanent employee
    } else {
        totalSalary = salary; // No bonus added
    }

    document.getElementById("output").innerHTML =
        `Permanent: ${isPermanent} <br> Total Salary: ₹${totalSalary}`;

    console.log("Global bonus is still unchanged:", bonus);
}
