function formatProductName() {
    // Original product name with unnecessary spaces
    let productName = " wireless headphones PRO ";

    // Step 1: Trim spaces
    let cleanedName = productName.trim();

    // Step 2: Convert to lowercase
    cleanedName = cleanedName.toLowerCase();

    // Step 3: Capitalize first letter of each word
    cleanedName = cleanedName
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    // Step 4: Replace "Pro" with "Pro Edition"
    cleanedName = cleanedName.replace("Pro", "Pro Edition");

    // Step 5: Get length of cleaned title
    let titleLength = cleanedName.length;

    // Display final result
    document.getElementById("output").innerHTML =
        `Formatted Product Name: ${cleanedName} <br> Length: ${titleLength}`;
}
