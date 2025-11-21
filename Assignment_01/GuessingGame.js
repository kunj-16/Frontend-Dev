// Q7. Smart Guessing Game (Number Range)

// Generate random number between 1–50
const secretNumber = Math.floor(Math.random() * 50) + 1;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guess").value);

    // Validation
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        document.getElementById("result").innerHTML = "Enter a number between 1 and 50!";
        return;
    }

    // Check guess conditions
    if (userGuess === secretNumber) {
        document.getElementById("result").innerHTML = "🎯 Correct guess!";
    } else {
        const diff = Math.abs(userGuess - secretNumber);

        if (diff <= 3) {
            document.getElementById("result").innerHTML = "🔥 Very close!";
        } else if (userGuess > secretNumber) {
            document.getElementById("result").innerHTML = "📈 Too high!";
        } else {
            document.getElementById("result").innerHTML = "📉 Too low!";
        }
    }
}
