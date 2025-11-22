const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

function calculateDiscount() {
  let total = 0;

  cart.forEach(product => {
    let discount = 0;

    if (product.category === "electronics") {
      discount = product.price * 0.10;
    } else if (product.category === "fashion") {
      discount = product.price * 0.05;
    }

    total += product.price - discount;
  });

  // Extra overall discount condition
  if (total > 50000) {
    total -= total * 0.05;
  }

  document.getElementById("result").innerHTML = `
    Final Payable Amount: ₹${total.toFixed(2)}
  `;
}
