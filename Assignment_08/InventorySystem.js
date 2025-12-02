
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 50 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1200, stock: 8 },
    { id: 4, name: "Jeans", category: "Clothing", price: 2000, stock: 2 },
    { id: 5, name: "Coffee Mug", category: "Kitchen", price: 300, stock: 20 },
    { id: 6, name: "Blender", category: "Kitchen", price: 2500, stock: 3 }
];


function getLowStockProducts(productList) {
    return productList.filter(p => p.stock <= 5);
}


function sortProductsByPrice(productList) {
    return productList.slice().sort((a, b) => a.price - b.price);
}


function calculateTotalInventoryValue(productList) {
    return productList.reduce((total, p) => total + (p.price * p.stock), 0);
}


function groupByCategory(productList) {
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }
        groups[product.category].push(product);
        return groups;
    }, {});
}
console.log("🟥 Low Stock Products:");
console.log(getLowStockProducts(products));

console.log("\n🟦 Products Sorted By Price:");
console.log(sortProductsByPrice(products));

console.log("\n🟩 Total Inventory Value:");
console.log("₹" + calculateTotalInventoryValue(products));

console.log("\n🟨 Grouped By Category:");
console.log(groupByCategory(products));
