"use strict";

const output = document.getElementById("output");

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    return `Brand: ${this.brand}, Model: ${this.model}`;
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

output.textContent += car1.getDetails() + "\n";
output.textContent += car2.getDetails() + "\n";
