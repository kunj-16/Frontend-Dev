// Q4. Academic Performance Evaluator

function checkResult() {
    let marks = [];
    let total = 0;
    let detained = false;

    for (let i = 1; i <= 5; i++) {
        let val = parseInt(document.getElementById("sub" + i).value);

        if (isNaN(val) || val < 0 || val > 100) {
            document.getElementById("result").innerHTML = "Please enter valid marks (0-100)";
            return;
        }

        marks.push(val);
        total += val;

        if (val < 35) detained = true;
    }

    let percentage = total / 5;
    let status;

    if (detained || percentage < 50) {
        status = "Detained";
    } else if (percentage >= 85) {
        status = "Promoted with Distinction";
    } else {
        status = "Promoted";
    }

    document.getElementById("result").innerHTML =
        `Total: ${total} | Percentage: ${percentage.toFixed(2)}% → ${status}`;
}
