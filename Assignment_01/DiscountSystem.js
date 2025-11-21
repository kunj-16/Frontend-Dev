// Q6. Progressive Discount System

function calculateDiscount() {
    const totalAmount = parseFloat(document.getElementById("total").value);
    let discountPercent = 0;

    // Validation
    if (isNaN(totalAmount) || totalAmount < 0) {
        document.getElementById("output").innerHTML = "Please enter a valid amount!";
        return;
    }

    // Discount logic based on amount
    if (totalAmount >= 10000) {
        discountPercent = 25;
    } else if (totalAmount >= 5000) {
        discountPercent = 15;
    } else if (totalAmount >= 2000) {
        discountPercent = 5;
    }

    // Calculate discount + final value
    const discountAmount = (totalAmount * discountPercent) / 100;
    const finalPrice = Math.round(totalAmount - discountAmount);

    // Display result
    document.getElementById("output").innerHTML =
        `Original Total: ₹${Math.round(totalAmount)}<br>
         Discount: ${discountPercent}%<br>
         Final Price: ₹${finalPrice}`;
}
