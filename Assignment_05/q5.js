"use strict";

const output = document.getElementById("output");

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    return `Name: ${this.name}`;
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    return `Branch: ${this.branch}`;
};

const student = new Student("Kunj", "CSE");

output.textContent += student.showName() + "\n";
output.textContent += student.showBranch() + "\n";
