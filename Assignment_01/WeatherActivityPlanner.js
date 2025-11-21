// Q5. Weather Activity Planner

function suggestActivity() {

    // Collect user inputs
    const temperature = parseFloat(document.getElementById("temp").value);
    const isRaining = document.getElementById("rain").value === "true";
    const windSpeed = parseFloat(document.getElementById("wind").value);
    let message = "";

    // Validate inputs
    if (isNaN(temperature) || isNaN(windSpeed)) {
        document.getElementById("activity").innerHTML = "Please enter valid values!";
        return;
    }

    // Decision conditions
    if (isRaining) {
        message = "Stay indoors with hot coffee.";
    } else if (temperature > 35) {
        message = "Go swimming.";
    } else if (temperature < 15 && windSpeed > 20) {
        message = "Too cold and windy — stay home.";
    } else {
        message = "Perfect day for a walk.";
    }

    // Print the result
    document.getElementById("activity").innerHTML = message;
}
