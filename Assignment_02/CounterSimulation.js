// Global counter variable
let count = 0;

function increment() {
    // Nested function demonstrating scope
    function update() {
        count++;
        displayCount();
    }
    update();
}

function decrement() {
    function update() {
        count--;
        displayCount();
    }
    update();
}

// Display updated count on screen
function displayCount() {
    document.getElementById("display").innerHTML = `Count: ${count}`;
    console.log("Current Count:", count);
}

// Simulated clicks (manual trigger)
increment(); 
increment();
decrement();
