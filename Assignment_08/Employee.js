// Parent Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in the ${this.department} department.`;
    }
}

// Child Class (inherits Employee)
class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Overriding work() method
    work() {
        return `${this.name} is managing the ${this.department} department.`;
    }
}

// Creating objects
const emp1 = new Employee("Amit", "Sales");
const emp2 = new Employee("Karan", "IT");

const manager1 = new Manager("Rohit", "Sales");
const manager2 = new Manager("Sneha", "HR");

// Runtime Polymorphism
const staff = [emp1, emp2, manager1, manager2];

staff.forEach(person => {
    // Calls the correct method at runtime
    console.log(person.work());
});
