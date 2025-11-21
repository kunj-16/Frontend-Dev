// Q1 - Personalized Login Greeting

// Declaring user name and getting current hour
let userName = "Kunj";
let currentHour = new Date().getHours();

// Checking time and displaying appropriate greeting
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
