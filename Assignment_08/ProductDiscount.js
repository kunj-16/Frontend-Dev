// Constructor Function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype Method for discount
Product.prototype.applyDiscount = function(percent) {
    const discountAmount = (this.price * percent) / 100;
    const newPrice = this.price - discountAmount;
    return newPrice;
};

// Creating 3 products
const p1 = new Product("Laptop", 60000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Keyboard", 1200);

// Applying discounts
console.log("Laptop (20% off): ₹" + p1.applyDiscount(20));
console.log("Headphones (10% off): ₹" + p2.applyDiscount(10));
console.log("Keyboard (50% off): ₹" + p3.applyDiscount(50));
