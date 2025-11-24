//Grocery Bill Calculator
function calculateBill(){
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    let total = price * quantity;

    if(total > 1000){
        total = total - (total * 0.01); // 1% discount
    }

    document.getElementById("output").textContent = "Total Amount : " + total.toFixed(2);
}
