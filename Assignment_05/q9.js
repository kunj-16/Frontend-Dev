"use strict";

const output = document.getElementById("output");

class Person {
    constructor(name){ this.name = name; }
    showName(){ return `Name: ${this.name}`; }
}

class Student extends Person {
    constructor(name, branch){
        super(name);
        this.branch = branch;
    }
    showBranch(){ return `Branch: ${this.branch}`; }
}

const student = new Student("Kunj", "CSE");

output.textContent += student.showName() + "\n";
output.textContent += student.showBranch() + "\n";
