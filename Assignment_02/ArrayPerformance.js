function analyzePerformance() {
    // Generate an array of 8 random scores between 30 and 100
    let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

    // Highest and lowest score
    let maxScore = Math.max(...scores);
    let minScore = Math.min(...scores);

    // Average using reduce()
    let averageScore = scores.reduce((sum, val) => sum + val, 0) / scores.length;

    // Number of students who passed (>= 50)
    let passedStudents = scores.filter(score => score >= 50).length;

    // Display output using template literals
    let result = `
        <strong>Performance Summary:</strong><br>
        Scores: ${scores.join(", ")} <br>
        Highest Score: ${maxScore} <br>
        Lowest Score: ${minScore} <br>
        Average Score: ${averageScore.toFixed(2)} <br>
        Passed Students (≥ 50): ${passedStudents}
    `;

    document.getElementById("output").innerHTML = result;
}
