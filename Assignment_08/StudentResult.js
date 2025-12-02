// Student Class
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Method to calculate average using reduce()
    calculateAverage() {
        const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
        return sum / this.marks.length;
    }

    // Method to determine grade
    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return 'A';
        else if (avg >= 75) return 'B';
        else if (avg >= 50) return 'C';
        else return 'F';
    }
}

// Testing with 3 students
const student1 = new Student("Kunj", [95, 88, 92, 90]);
const student2 = new Student("Aman", [70, 65, 80, 75]);
const student3 = new Student("Riya", [40, 55, 45, 50]);

// Display output
console.log(`${student1.name} → Avg: ${student1.calculateAverage()} → Grade: ${student1.getGrade()}`);
console.log(`${student2.name} → Avg: ${student2.calculateAverage()} → Grade: ${student2.getGrade()}`);
console.log(`${student3.name} → Avg: ${student3.calculateAverage()} → Grade: ${student3.getGrade()}`);
