"use strict";

const output = document.getElementById("output");

const user = {
    name: "Kunj",
    showName: () => {
        output.textContent += `Arrow function: ${this.name}\n`; // undefined
    }
};

user.showName();

// Fix using normal function
const user2 = {
    name: "Kunj",
    showName() {
        output.textContent += `Normal function: ${this.name}\n`; // Kunj
    }
};

user2.showName();
