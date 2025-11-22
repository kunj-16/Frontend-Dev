"use strict";

const output = document.getElementById("output");

function Person(name){
    this.name = name;
}
Person.prototype.sayHello = function(){ return `Hello, I am ${this.name}`; };

function Faculty(name, dept){
    Person.call(this, name);
    this.dept = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDept = function(){ return `Department: ${this.dept}`; };

function Professor(name, dept, subject){
    Faculty.call(this, name, dept);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSubject = function(){ return `Subject: ${this.subject}`; };

const prof = new Professor("Dr. Kunj", "CSE", "AI");

output.textContent += prof.sayHello() + "\n";
output.textContent += prof.showDept() + "\n";
output.textContent += prof.showSubject() + "\n";
