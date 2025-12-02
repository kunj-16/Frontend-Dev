$(document).ready(function() {

    const now = new Date();
    const hours = now.getHours();
    let greetingText = "";

    if (hours >= 5 && hours < 12) {
        greetingText = "Good Morning!";
    } else if (hours >= 12 && hours < 17) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }

    $("#greeting").text(greetingText);

    $("#changeGreetingBtn").click(function() {
        const quotes = [
            "Believe you can and you're halfway there.",
            "Success is not final, failure is not fatal.",
            "Dream big and dare to fail.",
            "Your limitation—it's only your imagination.",
            "Push yourself, because no one else is going to do it for you."
        ];

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        $("#greeting").text(randomQuote);
    });

    $("#toggleWelcomeBtn").click(function() {
        $("#welcomeMsg").toggle(); // jQuery toggle function
    });

    $("#greeting").click(function() {
        alert("You clicked the greeting! Have a wonderful day!");
    });
});
