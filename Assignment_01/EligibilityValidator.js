// Q10. Citizen Eligibility Validator

let age = 18; // sample input value
let isCitizen = true; // sample input boolean

// Eligibility Logic with Nested Conditions
if (age >= 18) {
    if (isCitizen) {
        if (age >= 21) {
            console.log("Eligible for all services.");
        } else {
            console.log("Eligible to vote only.");
        }
    } else {
        console.log("Only age criteria met.");
    }
} else {
    console.log("Not eligible yet.");
}
