const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

function evaluate() {
  let output = "";

  departments.forEach(dept => {
    let name = dept[0];
    let score = dept[1];
    let performance = "";

    if (score >= 90) {
      performance = "Excellent";
    } else if (score >= 75) {
      performance = "Good";
    } else if (score >= 60) {
      performance = "Average";
    } else {
      performance = "Needs Improvement";
    }

    output += `${name}: ${score} → ${performance} <br>`;
  });

  document.getElementById("status").innerHTML = output;
}
