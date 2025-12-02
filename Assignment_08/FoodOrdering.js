// Menu list
const menu = {
    pizza: 250,
    burger: 150,
    pasta: 200,
    fries: 100,
    coke: 50
};

// Function to calculate total bill
function calculateBill(orderItems) {
    // Using map() to extract prices OR throw error
    const prices = orderItems.map(item => {
        if (!menu[item]) {
            throw new Error(`Invalid item ordered: ${item}`);
        }
        return menu[item];
    });

    // Using reduce() to calculate total
    const total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

// Test the function with try-catch
try {
    const order = ["pizza", "coke", "fries"]; // valid order
    const total = calculateBill(order);
    console.log(`Total Bill: ₹${total}`);
} 
catch (error) {
    console.log("Error:", error.message);
}

// Test with invalid item
try {
    const order = ["burger", "icecream"]; // icecream not in menu
    const total = calculateBill(order);
    console.log(`Total Bill: ₹${total}`);
} 
catch (error) {
    console.log("Error:", error.message);
}
