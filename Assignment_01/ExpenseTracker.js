// Q3 - Monthly Expense Tracker

// Array storing expenses: food, travel, rent, bills, leisure
let expenses = [6000, 1500, 9000, 2500, 2000];

// Calculating total expense
let totalExpense = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}

// Calculating average expense
let averageExpense = totalExpense / expenses.length;

// Adding 10% tax to total expense
let finalAmount = totalExpense;
finalAmount += finalAmount * 0.10; // Using += operator

// Displaying formatted output with 2 decimal places
console.log("Total Expense: ₹" + totalExpense.toFixed(2));
console.log("Average Expense: ₹" + averageExpense.toFixed(2));
console.log("Final Amount After Tax: ₹" + finalAmount.toFixed(2));
