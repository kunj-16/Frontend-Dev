// Q2 - Multi-Type Data Summary

// Declaring different types of variables
let userName = "Kunj";           // string
let age = 20;                    // number
let isStudent = true;            // boolean
let hobbies = ["Photography", "Coding", "Travel"]; // array
let profile = { college: "GLA University", year: 2 }; // object
let currentMood = null;          // null
let futureGoal;                  // undefined

// Creating formatted summary table
console.table([
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Is Student", value: isStudent, type: typeof isStudent },
    { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "Profile", value: profile, type: typeof profile },
    { label: "Current Mood", value: currentMood, type: "null" },
    { label: "Future Goal", value: futureGoal, type: typeof futureGoal }
]);
